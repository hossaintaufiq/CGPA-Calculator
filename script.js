/**
 * Bangladesh University CGPA Calculator
 * 
 * IMPORTANT NOTES:
 * - AIUB grading system has been corrected (removed A- and B- grades)
 * - Other universities may need verification of their grading systems
 * - Consider moving universityGradingSystems to a separate file for better organization
 */

import { universityGradingSystems } from './university-grading-systems.js';

// Common credit options
const creditsOptions = [1, 1.5, 2, 3, 4];

// DOM elements
const coursesContainer = document.getElementById('coursesContainer');
const prevCreditsInput = document.getElementById('prevCredits');
const prevGradeSelect = document.getElementById('prevGradeSelect');
const universitySelect = document.getElementById('universitySelect');
const gradingInfo = document.getElementById('gradingInfo');
const resultsSection = document.getElementById('resultsSection');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const semesterUniversitySelect = document.getElementById('semesterUniversitySelect');
const semesterGradingInfo = document.getElementById('semesterGradingInfo');

// Current university and grade options
let currentUniversity = 'nsu';
let currentGradeOptions = universityGradingSystems.nsu.grades;
let calculationData = null;

// Initialize the application
function initializeApp() {
    if (!coursesContainer || !universitySelect || !prevGradeSelect) {
        alert('Initialization error: Some required elements are missing.');
        return;
    }
    if (typeof universityGradingSystems !== 'object') {
        alert('Initialization error: Grading systems module not loaded.');
        return;
    }
    updateGradingInfo();
    updateGradeSelects();
    
    // Add event listener for university selection (General tab)
    universitySelect.addEventListener('change', function() {
        currentUniversity = this.value;
        currentGradeOptions = universityGradingSystems[currentUniversity].grades;
        updateGradingInfo();
        updateGradeSelects();
        // Always ensure at least one course row exists
        if (coursesContainer.getElementsByClassName('input-row').length === 0) {
            addRow();
        }
        // Sync with semester tab
        semesterUniversitySelect.value = this.value;
        updateSemesterGradingInfo();
    });
    
    // Add event listener for semester university selection
    semesterUniversitySelect.addEventListener('change', function() {
        const semesterUni = this.value;
        updateSemesterGradingInfo();
        // Sync with general tab
        universitySelect.value = semesterUni;
        currentUniversity = semesterUni;
        currentGradeOptions = universityGradingSystems[currentUniversity].grades;
        updateGradingInfo();
        updateGradeSelects();
        // Always ensure at least one course row exists
        if (coursesContainer.getElementsByClassName('input-row').length === 0) {
            addRow();
        }
    });
    
    // Add event listener for PDF download
    if (downloadPdfBtn) downloadPdfBtn.addEventListener('click', generatePDF);
    
    // Add initial rows if none exist
    if (coursesContainer.getElementsByClassName('input-row').length === 0) {
        for (let i = 0; i < 3; i++) addRow();
    }
    
    // Add smooth scrolling for better UX
    addSmoothScrolling();
    
    // Add input validation and real-time feedback
    addInputValidation();
}

// Add smooth scrolling
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add input validation and real-time feedback
function addInputValidation() {
    // Add validation to previous credits input
    prevCreditsInput.addEventListener('input', function() {
        const value = parseFloat(this.value);
        if (value < 0) {
            this.value = 0;
            showNotification('Credits cannot be negative', 'warning');
        }
    });
    // Add validation to previous grade input
    prevGradeSelect.addEventListener('input', function() {
        const value = parseFloat(this.value);
        if (value < 1) {
            this.value = 1;
            showNotification('Grade cannot be less than 1.00', 'warning');
        } else if (value > 4) {
            this.value = 4;
            showNotification('Grade cannot be more than 4.00', 'warning');
        }
    });
    // Add validation to course inputs
    document.addEventListener('input', function(e) {
        if (e.target.type === 'number' && e.target.placeholder === 'Course') {
            const value = parseFloat(e.target.value);
            if (value < 0) {
                e.target.value = 0;
                showNotification('Credits cannot be negative', 'warning');
            }
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'warning' ? 'bg-yellow-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Update grading information display
function updateGradingInfo() {
    const university = universityGradingSystems[currentUniversity];
    const gradeText = university.grades.map(g => `${g.letter} (${g.value})`).join(', ');
    gradingInfo.innerHTML = `<strong>Grading System:</strong> ${gradeText}`;
}

// Update all grade select elements
function updateGradeSelects() {
    // Update all course grade selects
    const courseGradeSelects = document.querySelectorAll('.course-grade-select');
    courseGradeSelects.forEach(select => {
        updateGradeSelect(select);
    });
}

function updateGradeSelect(selectElement) {
    const currentValue = selectElement.value;
    selectElement.innerHTML = '';
    const grades = universityGradingSystems[currentUniversity].grades;
    grades.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.value;
        opt.textContent = `${g.letter} (${g.value})`;
        if (currentValue && g.value === currentValue) opt.selected = true;
        selectElement.appendChild(opt);
    });
    if (!selectElement.value) {
        selectElement.value = grades[0].value;
    }
}

function createRow(course = '', credits = 0, grade = null) {
    const row = document.createElement('div');
    row.className = 'input-row grid grid-cols-4 gap-4 items-center mb-2 bg-gray-50 rounded-lg shadow hover:shadow-md transition';

    // Course input
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.placeholder = 'Course';
    courseInput.className = 'border rounded px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base md:text-lg';
    courseInput.value = course;

    // Credits select
    const creditsSelect = document.createElement('select');
    creditsSelect.className = 'border rounded px-3 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-300 text-base md:text-lg';
    const defaultCreditsOption = document.createElement('option');
    defaultCreditsOption.value = '';
    defaultCreditsOption.textContent = '0';
    creditsSelect.appendChild(defaultCreditsOption);
    creditsOptions.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        if (c === credits) opt.selected = true;
        creditsSelect.appendChild(opt);
    });

    // Grade select
    const gradeSelect = document.createElement('select');
    gradeSelect.className = 'border rounded px-3 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-300 text-base md:text-lg course-grade-select';
    const grades = universityGradingSystems[currentUniversity].grades;
    grades.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.value;
        opt.textContent = `${g.letter} (${g.value})`;
        if (grade !== null && g.value === grade) opt.selected = true;
        gradeSelect.appendChild(opt);
    });
    // If no grade is provided, default to highest
    if (grade === null) {
        gradeSelect.value = grades[0].value;
    }

    // Delete button wrapper for centering
    const delBtnWrapper = document.createElement('div');
    delBtnWrapper.className = 'flex items-center justify-center h-full';
    // Delete button
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'text-white bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition shadow';
    delBtn.innerHTML = '&times;';
    delBtn.onclick = () => {
        row.remove();
        showNotification('Course removed', 'info');
    };
    delBtnWrapper.appendChild(delBtn);

    row.appendChild(courseInput);
    row.appendChild(creditsSelect);
    row.appendChild(gradeSelect);
    row.appendChild(delBtnWrapper);
    coursesContainer.appendChild(row);

    // Auto-select highest grade if course and credits are filled but grade is not
    courseInput.addEventListener('input', () => {
        if (courseInput.value && creditsSelect.value && !gradeSelect.value) {
            gradeSelect.value = grades[0].value;
        }
    });
    creditsSelect.addEventListener('change', () => {
        if (courseInput.value && creditsSelect.value && !gradeSelect.value) {
            gradeSelect.value = grades[0].value;
        }
    });
}

function addRow() {
    createRow();
}

function getRowsData() {
    const rows = Array.from(coursesContainer.getElementsByClassName('input-row'));
    return rows.map(row => {
        const [courseInput, creditsSelect, gradeSelect] = row.querySelectorAll('input, select');
        return {
            course: courseInput.value.trim(),
            credits: parseFloat(creditsSelect.value),
            grade: parseFloat(gradeSelect.value)
        };
    });
}

function calculateCGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;
    const courseDetails = [];
    const previousCredits = [];

    // Previous credits and grade
    const prevCredits = parseFloat(prevCreditsInput.value);
    const prevGrade = parseFloat(prevGradeSelect.value);
    if (!isNaN(prevCredits) && prevCredits > 0 && !isNaN(prevGrade)) {
        totalCredits += prevCredits;
        totalGradePoints += prevCredits * prevGrade;
        previousCredits.push({
            type: 'Previous Credits',
            credits: prevCredits,
            grade: prevGrade,
            gradePoints: prevCredits * prevGrade
        });
    }

    // Dynamic rows
    const data = getRowsData().filter(r => r.credits && !isNaN(r.grade) && r.course);
    data.forEach(row => {
        totalCredits += row.credits;
        totalGradePoints += row.credits * row.grade;
        courseDetails.push({
            course: row.course,
            credits: row.credits,
            grade: row.grade,
            gradePoints: row.credits * row.grade
        });
    });
    
    const cgpa = totalCredits ? (totalGradePoints / totalCredits) : 0;

    // Store calculation data for PDF
    calculationData = {
        university: universityGradingSystems[currentUniversity].name,
        cgpa: cgpa,
        totalCredits: totalCredits,
        totalGradePoints: totalGradePoints,
        courseDetails: courseDetails,
        previousCredits: previousCredits,
        calculationDate: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    // Show results section
    displayResults();
    
    // Show success notification
    showNotification(`CGPA calculated successfully: ${cgpa.toFixed(2)}`, 'success');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function displayResults() {
    if (!calculationData) return;
    
    // Update PDF content
    document.getElementById('pdfUniversityName').textContent = calculationData.university;
    document.getElementById('pdfCalculationDate').textContent = calculationData.calculationDate;
    document.getElementById('pdfCgpa').textContent = calculationData.cgpa.toFixed(2);
    document.getElementById('pdfCredits').textContent = calculationData.totalCredits % 1 === 0 ? calculationData.totalCredits : calculationData.totalCredits.toFixed(1);
    
    // Update calculation formula
    document.getElementById('pdfCalculationFormula').textContent = 
        `${calculationData.totalGradePoints.toFixed(2)} ÷ ${calculationData.totalCredits} = ${calculationData.cgpa.toFixed(2)}`;
    
    // Update previous credits table
    const previousCreditsBody = document.getElementById('pdfPreviousCreditsBody');
    previousCreditsBody.innerHTML = '';
    
    if (calculationData.previousCredits.length > 0) {
        document.getElementById('pdfPreviousCredits').classList.remove('hidden');
        calculationData.previousCredits.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-4 py-2">${item.type}</td>
                <td class="px-4 py-2 text-center">${item.credits}</td>
                <td class="px-4 py-2 text-center">${item.gradePoints.toFixed(2)}</td>
            `;
            previousCreditsBody.appendChild(row);
        });
    } else {
        document.getElementById('pdfPreviousCredits').classList.add('hidden');
    }
    
    // Update course details table
    const courseDetailsBody = document.getElementById('pdfCourseDetailsBody');
    courseDetailsBody.innerHTML = '';
    
    calculationData.courseDetails.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-4 py-2">${item.course}</td>
            <td class="px-4 py-2 text-center">${item.credits}</td>
            <td class="px-4 py-2 text-center">${item.gradePoints.toFixed(2)}</td>
        `;
        courseDetailsBody.appendChild(row);
    });
    
    // Show results section
    resultsSection.classList.remove('hidden');
}

function getGradeLetter(gradeValue) {
    const grade = currentGradeOptions.find(g => g.value === gradeValue);
    return grade ? grade.letter : 'N/A';
}

async function generatePDF() {
    if (!calculationData) {
        showNotification('No calculation data available', 'error');
        return;
    }
    try {
        showNotification('Generating PDF...', 'info');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        let y = 56;

        // 1. Headline: Grade Report
        pdf.setFillColor(200, 220, 255); // Soft blue
        pdf.roundedRect(0, 0, pageWidth, 70, 0, 0, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(30);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Grade Report', pageWidth / 2, 44, { align: 'center' });
        y = 90;

        // 2. University Name
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        pdf.setTextColor(200, 220, 255); // Soft blue
        pdf.text(calculationData.university, pageWidth / 2, y, { align: 'center' });
        y += 30;

        // 3. Student Info Row
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(13);
        pdf.setTextColor(55, 65, 81); // Tailwind gray-700
        pdf.text('Name:', 60, y);
        pdf.text('_________________________', 100, y);
        pdf.text('ID:', 300, y);
        pdf.text('_________________', 325, y);
        pdf.text('Semester:', 470, y);
        pdf.text('_____________', 530, y);
        y += 32;

        // 4. Summary Card
        pdf.setFillColor(245, 247, 250); // Light gray
        pdf.roundedRect(50, y, pageWidth - 100, 60, 14, 14, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(15);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Summary', 65, y + 28);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(13);
        pdf.setTextColor(55, 65, 81);
        pdf.text('Total CGPA:', 200, y + 28);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(180, 230, 200); // Gentle green
        pdf.text(`${calculationData.cgpa.toFixed(2)}`, 280, y + 28);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(13);
        pdf.setTextColor(55, 65, 81);
        pdf.text('Total Credits:', 370, y + 28);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(255, 230, 180); // Gentle orange
        pdf.text(`${calculationData.totalCredits % 1 === 0 ? calculationData.totalCredits : calculationData.totalCredits.toFixed(1)}`, 470, y + 28);
        y += 80;

        // 5. Course Details Table
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(15);
        pdf.setTextColor(180, 230, 200); // Gentle green
        pdf.text('Course Details', 50, y);
        y += 12;
        pdf.setDrawColor(180, 230, 200);
        pdf.setLineWidth(1);
        pdf.line(50, y + 4, pageWidth - 50, y + 4);
        y += 14;

        // Define column widths and positions
        const tableStartX = 50;
        const tableEndX = pageWidth - 50;
        const tableWidth = tableEndX - tableStartX;
        
        // Column widths (percentage of table width)
        const courseColWidth = tableWidth * 0.45; // 45% for course name
        const creditsColWidth = tableWidth * 0.15; // 15% for credits
        const gradeColWidth = tableWidth * 0.15;   // 15% for grade
        const pointsColWidth = tableWidth * 0.25;  // 25% for grade points
        
        // Column positions
        const courseColX = tableStartX + 10;
        const creditsColX = courseColX + courseColWidth;
        const gradeColX = creditsColX + creditsColWidth;
        const pointsColX = gradeColX + gradeColWidth;

        // Table header
        pdf.setFillColor(245, 247, 250); // Light gray
        pdf.roundedRect(tableStartX, y, tableWidth, 26, 8, 8, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Course', courseColX, y + 18);
        pdf.text('Credits', creditsColX + 10, y + 18);
        pdf.text('Grade', gradeColX + 10, y + 18);
        pdf.text('Grade Points', pointsColX + 10, y + 18);
        y += 28;

        // Table rows
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        
        calculationData.courseDetails.forEach((item, idx) => {
            // Calculate row height based on course name length
            const courseNameHeight = getTextHeight(item.course, courseColWidth - 20, pdf, 12);
            const rowHeight = Math.max(22, courseNameHeight + 8); // Minimum 22pt height
            
            // Check if we need a new page
            if (y + rowHeight > pageHeight - 100) {
                pdf.addPage();
                y = 56;
            }
            
            // Row background
            if (idx % 2 === 0) {
                pdf.setFillColor(245, 247, 250); // Light gray
                pdf.roundedRect(tableStartX, y, tableWidth, rowHeight, 8, 8, 'F');
            }
            
            pdf.setTextColor(55, 65, 81);
            
            // Course name (with wrapping)
            drawWrappedText(item.course, courseColX, y + 12, courseColWidth - 20, pdf, 12);
            
            // Credits (centered)
            const creditsText = String(item.credits);
            const creditsWidth = pdf.getTextWidth(creditsText);
            pdf.text(creditsText, creditsColX + (creditsColWidth - creditsWidth) / 2, y + 12);
            
            // Grade (centered)
            const gradeText = String(item.grade);
            const gradeWidth = pdf.getTextWidth(gradeText);
            pdf.text(gradeText, gradeColX + (gradeColWidth - gradeWidth) / 2, y + 12);
            
            // Grade Points (centered)
            const pointsText = item.gradePoints.toFixed(2);
            const pointsWidth = pdf.getTextWidth(pointsText);
            pdf.text(pointsText, pointsColX + (pointsColWidth - pointsWidth) / 2, y + 12);
            
            y += rowHeight;
        });
        y += 20;

        // 6. Footer
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Generated by ALL University CGPA Calculator', pageWidth / 2, pageHeight - 40, { align: 'center' });
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        pdf.setTextColor(180, 230, 200); // Gentle green
        pdf.text('Developed by Neptune Software Solutions', pageWidth / 2, pageHeight - 20, { align: 'center' });

        // Save PDF
        const fileName = `Grade_Report_${calculationData.university.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(fileName);
        showNotification('PDF downloaded successfully!', 'success');
    } catch (error) {
        console.error('PDF generation error:', error);
        showNotification('Error generating PDF. Please try again.', 'error');
    }
}

// Tab navigation logic
function showTab(tab) {
    const generalSection = document.getElementById('sectionGeneral');
    const semesterSection = document.getElementById('sectionSemester');
    const tabGeneral = document.getElementById('tabGeneral');
    const tabSemester = document.getElementById('tabSemester');
    if (tab === 'general') {
        generalSection.classList.remove('hidden');
        semesterSection.classList.add('hidden');
        tabGeneral.classList.add('border-blue-600');
        tabGeneral.classList.remove('border-transparent');
        tabSemester.classList.remove('border-blue-600');
        tabSemester.classList.add('border-transparent');
    } else {
        generalSection.classList.add('hidden');
        semesterSection.classList.remove('hidden');
        tabSemester.classList.add('border-blue-600');
        tabSemester.classList.remove('border-transparent');
        tabGeneral.classList.remove('border-blue-600');
        tabGeneral.classList.add('border-transparent');
    }
}

// Semester-wise CGPA logic
function addSemesterRow(semester = '', cgpa = '', credits = '') {
    const semesterRows = document.getElementById('semesterRows');
    const row = document.createElement('tr');
    row.className = 'bg-purple-50 hover:bg-purple-100 transition';
    
    // Semester input
    const semesterInput = document.createElement('input');
    semesterInput.type = 'text';
    semesterInput.placeholder = 'e.g. Spring 2024';
    semesterInput.className = 'border rounded px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base';
    semesterInput.value = semester;
    
    // CGPA input
    const cgpaInput = document.createElement('input');
    cgpaInput.type = 'number';
    cgpaInput.placeholder = 'CGPA';
    cgpaInput.className = 'border rounded px-3 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-purple-300 text-base';
    cgpaInput.step = '0.01';
    cgpaInput.min = '0';
    cgpaInput.max = '4';
    cgpaInput.value = cgpa;
    
    // Credits input
    const creditsInput = document.createElement('input');
    creditsInput.type = 'number';
    creditsInput.placeholder = 'Credits';
    creditsInput.className = 'border rounded px-3 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-purple-300 text-base';
    creditsInput.step = '0.01';
    creditsInput.min = '0';
    creditsInput.value = credits;
    
    // Delete button
    const delBtnTd = document.createElement('td');
    delBtnTd.className = 'flex items-center justify-center h-full';
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition shadow';
    delBtn.innerHTML = '&times;';
    delBtn.onclick = () => {
        row.remove();
        updateSemesterResultVisibility();
    };
    delBtnTd.appendChild(delBtn);
    
    // Build row
    row.appendChild(createTd(semesterInput));
    row.appendChild(createTd(cgpaInput));
    row.appendChild(createTd(creditsInput));
    row.appendChild(delBtnTd);
    semesterRows.appendChild(row);
}

function createTd(child) {
    const td = document.createElement('td');
    td.appendChild(child);
    return td;
}

function calculateSemesterCGPA() {
    const semesterRows = document.getElementById('semesterRows').querySelectorAll('tr');
    let totalCredits = 0;
    let totalGradePoints = 0;
    semesterRows.forEach(row => {
        const [semesterInput, cgpaInput, creditsInput] = row.querySelectorAll('input');
        const cgpa = parseFloat(cgpaInput.value);
        const credits = parseFloat(creditsInput.value);
        if (!isNaN(cgpa) && !isNaN(credits) && credits > 0) {
            totalCredits += credits;
            totalGradePoints += cgpa * credits;
        }
    });
    const overallCgpa = totalCredits ? (totalGradePoints / totalCredits) : 0;
    document.getElementById('overallCgpa').textContent = overallCgpa.toFixed(2);
    document.getElementById('overallCredits').textContent = totalCredits % 1 === 0 ? totalCredits : totalCredits.toFixed(2);
    // Show/hide result
    updateSemesterResultVisibility(totalCredits > 0);
}

function updateSemesterResultVisibility(show) {
    const resultDiv = document.getElementById('semesterResult');
    if (typeof show === 'boolean') {
        if (show) resultDiv.classList.remove('hidden');
        else resultDiv.classList.add('hidden');
    } else {
        // Auto-hide if no rows or all empty
        const semesterRows = document.getElementById('semesterRows').querySelectorAll('tr');
        let hasData = false;
        semesterRows.forEach(row => {
            const [semesterInput, cgpaInput, creditsInput] = row.querySelectorAll('input');
            if (cgpaInput.value && creditsInput.value) hasData = true;
        });
        if (hasData) resultDiv.classList.remove('hidden');
        else resultDiv.classList.add('hidden');
    }
}

function updateSemesterGradingInfo() {
    const semesterUni = semesterUniversitySelect.value;
    const university = universityGradingSystems[semesterUni];
    const gradeText = university.grades.map(g => `${g.letter} (${g.value})`).join(', ');
    semesterGradingInfo.innerHTML = `<strong>Grading System:</strong> ${gradeText}`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Form submit event
const cgpaForm = document.getElementById('cgpaForm');
cgpaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCGPA();
}); 
    
    // Tab logic: default to General, add initial semester row
    showTab('general');
    addSemesterRow();
    
    // Initialize semester university selector
    updateSemesterGradingInfo();
    
    // Semester form submit
    const semesterForm = document.getElementById('semesterForm');
    semesterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateSemesterCGPA();
    });
});

window.addRow = addRow;
window.showTab = showTab;
window.addSemesterRow = addSemesterRow;
window.calculateSemesterCGPA = calculateSemesterCGPA;

// --- Semester-wise PDF Generation ---
const downloadSemesterPdfBtn = document.getElementById('downloadSemesterPdfBtn');
if (downloadSemesterPdfBtn) {
    downloadSemesterPdfBtn.addEventListener('click', generateSemesterPDF);
}

async function generateSemesterPDF() {
    const semesterRows = document.querySelectorAll('#semesterRows tr');
    if (!semesterRows.length) {
        showNotification('No semester data available', 'error');
        return;
    }
    let semesters = [];
    let totalCredits = 0;
    let totalGradePoints = 0;
    semesterRows.forEach(row => {
        const [semesterInput, cgpaInput, creditsInput] = row.querySelectorAll('input');
        const semester = semesterInput.value || '';
        const cgpa = parseFloat(cgpaInput.value);
        const credits = parseFloat(creditsInput.value);
        if (!isNaN(cgpa) && !isNaN(credits) && credits > 0) {
            semesters.push({ semester, cgpa, credits });
            totalCredits += credits;
            totalGradePoints += cgpa * credits;
        }
    });
    if (!semesters.length) {
        showNotification('No valid semester data', 'error');
        return;
    }
    const overallCgpa = totalCredits ? (totalGradePoints / totalCredits) : 0;
    try {
        showNotification('Generating PDF...', 'info');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        let y = 56;
        
        // Header
        pdf.setFillColor(230, 220, 255); // Soft lavender
        pdf.roundedRect(0, 0, pageWidth, 70, 0, 0, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(30);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Semester-wise CGPA Report', pageWidth / 2, 44, { align: 'center' });
        y = 90;
        
        // University Name
        const uni = semesterUniversitySelect.options[semesterUniversitySelect.selectedIndex].text;
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        pdf.setTextColor(230, 220, 255); // Soft lavender
        pdf.text(uni, pageWidth / 2, y, { align: 'center' });
        y += 30;
        
        // Student Info Row
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(13);
        pdf.setTextColor(55, 65, 81);
        pdf.text('Name:', 60, y);
        pdf.text('_________________________', 100, y);
        pdf.text('ID:', 300, y);
        pdf.text('_________________', 325, y);
        y += 32;
        
        // Summary
        pdf.setFillColor(245, 247, 250);
        pdf.roundedRect(50, y, pageWidth - 100, 60, 14, 14, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(15);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Summary', 65, y + 28);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(13);
        pdf.setTextColor(55, 65, 81);
        pdf.text('Overall CGPA:', 200, y + 28);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(180, 230, 200); // Gentle green
        pdf.text(`${overallCgpa.toFixed(2)}`, 300, y + 28);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(13);
        pdf.setTextColor(55, 65, 81);
        pdf.text('Total Credits:', 400, y + 28);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(255, 230, 180); // Gentle orange
        pdf.text(`${totalCredits % 1 === 0 ? totalCredits : totalCredits.toFixed(1)}`, 500, y + 28);
        y += 80;
        
        // Semester Table
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(15);
        pdf.setTextColor(180, 230, 200); // Gentle green
        pdf.text('Semester Details', 50, y);
        y += 12;
        pdf.setDrawColor(180, 230, 200);
        pdf.setLineWidth(1);
        pdf.line(50, y + 4, pageWidth - 50, y + 4);
        y += 14;

        // Define column widths and positions
        const tableStartX = 50;
        const tableEndX = pageWidth - 50;
        const tableWidth = tableEndX - tableStartX;
        
        // Column widths (percentage of table width)
        const semesterColWidth = tableWidth * 0.50; // 50% for semester name
        const cgpaColWidth = tableWidth * 0.25;     // 25% for CGPA
        const creditsColWidth = tableWidth * 0.25;  // 25% for credits
        
        // Column positions
        const semesterColX = tableStartX + 10;
        const cgpaColX = semesterColX + semesterColWidth;
        const creditsColX = cgpaColX + cgpaColWidth;

        // Table header
        pdf.setFillColor(245, 247, 250); // Light gray
        pdf.roundedRect(tableStartX, y, tableWidth, 26, 8, 8, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Semester', semesterColX, y + 18);
        pdf.text('CGPA', cgpaColX + 10, y + 18);
        pdf.text('Credits', creditsColX + 10, y + 18);
        y += 28;
        
        // Table rows
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        
        semesters.forEach((item, idx) => {
            // Calculate row height based on semester name length
            const semesterNameHeight = getTextHeight(item.semester || `Semester ${idx + 1}`, semesterColWidth - 20, pdf, 12);
            const rowHeight = Math.max(22, semesterNameHeight + 8); // Minimum 22pt height
            
            // Check if we need a new page
            if (y + rowHeight > pageHeight - 100) {
                pdf.addPage();
                y = 56;
            }
            
            // Row background
            if (idx % 2 === 0) {
                pdf.setFillColor(245, 247, 250); // Light gray
                pdf.roundedRect(tableStartX, y, tableWidth, rowHeight, 8, 8, 'F');
            }
            
            pdf.setTextColor(55, 65, 81);
            
            // Semester name (with wrapping)
            const semesterText = item.semester || `Semester ${idx + 1}`;
            drawWrappedText(semesterText, semesterColX, y + 12, semesterColWidth - 20, pdf, 12);
            
            // CGPA (centered)
            const cgpaText = String(item.cgpa);
            const cgpaWidth = pdf.getTextWidth(cgpaText);
            pdf.text(cgpaText, cgpaColX + (cgpaColWidth - cgpaWidth) / 2, y + 12);
            
            // Credits (centered)
            const creditsText = String(item.credits);
            const creditsWidth = pdf.getTextWidth(creditsText);
            pdf.text(creditsText, creditsColX + (creditsColWidth - creditsWidth) / 2, y + 12);
            
            y += rowHeight;
        });
        y += 20;
        
        // Footer
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(60, 60, 80);
        pdf.text('Generated by ALL University CGPA Calculator', pageWidth / 2, pageHeight - 40, { align: 'center' });
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        pdf.setTextColor(180, 230, 200); // Gentle green
        pdf.text('Developed by Neptune Software Solutions', pageWidth / 2, pageHeight - 20, { align: 'center' });
        
        // Save PDF
        const fileName = `Semester_Report_${uni.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(fileName);
        showNotification('PDF downloaded successfully!', 'success');
    } catch (error) {
        console.error('PDF generation error:', error);
        showNotification('Error generating PDF. Please try again.', 'error');
    }
}

// Fix mobile navbar toggle for mobile
window.toggleMobileMenu = function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
};

// Helper function to wrap text to fit within a specified width
function wrapText(text, maxWidth, pdf) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    for (let word of words) {
        const testLine = currentLine ? currentLine + ' ' + word : word;
        const testWidth = pdf.getTextWidth(testLine);
        
        if (testWidth > maxWidth && currentLine !== '') {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }
    
    if (currentLine) {
        lines.push(currentLine);
    }
    
    return lines;
}

// Helper function to get the maximum height needed for text wrapping
function getTextHeight(text, maxWidth, pdf, lineHeight = 14) {
    const lines = wrapText(text, maxWidth, pdf);
    return lines.length * lineHeight;
}

// Helper function to draw wrapped text
function drawWrappedText(text, x, y, maxWidth, pdf, lineHeight = 14) {
    const lines = wrapText(text, maxWidth, pdf);
    lines.forEach((line, index) => {
        pdf.text(line, x, y + (index * lineHeight));
    });
    return lines.length * lineHeight;
}
