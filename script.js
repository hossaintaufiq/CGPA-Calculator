// University grading systems
const universityGradingSystems = {
    // Standard 4.0 scale (most private universities)
    nsu: {
        name: "North South University (NSU)",
        grades: [
            { letter: 'A', value: 4.0 },
            { letter: 'A−', value: 3.7 },
            { letter: 'B+', value: 3.3 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.7 },
            { letter: 'C+', value: 2.3 },
            { letter: 'C', value: 2.0 },
            { letter: 'C−', value: 1.7 },
            { letter: 'D+', value: 1.3 },
            { letter: 'D', value: 1.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    du: {
        name: "University of Dhaka (DU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    brac: {
        name: "BRAC University",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    ju: {
        name: "Jahangirnagar University (JU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    daffodil: {
        name: "Daffodil International University",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    buet: {
        name: "Bangladesh University of Engineering and Technology (BUET)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    ewu: {
        name: "East West University (EWU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    uiu: {
        name: "United International University (UIU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    aiub: {
        name: "American International University - Bangladesh (AIUB)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    bsmrau: {
        name: "Bangabandhu Sheikh Mujibur Rahman Agricultural University (BSMRAU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    ru: {
        name: "University of Rajshahi (RU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    stamford: {
        name: "Stamford University Bangladesh",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    bu: {
        name: "Bangladesh University",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    diu: {
        name: "Dhaka International University",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    duet: {
        name: "Dhaka University of Engineering and Technology (DUET)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    cuet: {
        name: "Chittagong University of Engineering and Technology (CUET)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    iub: {
        name: "Independent University, Bangladesh (IUB)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    iubat: {
        name: "IUBAT - International University of Business Agriculture and Technology",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    uap: {
        name: "University of Asia Pacific (UAP)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    wub: {
        name: "World University of Bangladesh (WUB)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    seu: {
        name: "Southeast University (SEU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    gub: {
        name: "Green University of Bangladesh",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    bau: {
        name: "Bangladesh Agricultural University (BAU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    iut: {
        name: "Islamic University of Technology (IUT)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    jnu: {
        name: "Jagannath University (JnU)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    sau: {
        name: "Sher-e-Bangla Agricultural University",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    sust: {
        name: "Shahjalal University of Science and Technology (SUST)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    ruet: {
        name: "Rajshahi University of Engineering & Technology (RUET)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    },
    kuet: {
        name: "Khulna University of Engineering & Technology (KUET)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'A−', value: 3.5 },
            { letter: 'B+', value: 3.25 },
            { letter: 'B', value: 3.0 },
            { letter: 'B−', value: 2.75 },
            { letter: 'C+', value: 2.5 },
            { letter: 'C', value: 2.25 },
            { letter: 'D', value: 2.0 },
            { letter: 'F', value: 0.0 }
        ]
    }
};

// Common credit options
const creditsOptions = [1, 1.5, 2, 3, 4];

// DOM elements
const coursesContainer = document.getElementById('coursesContainer');
const prevCreditsInput = document.getElementById('prevCredits');
const prevGradeSelect = document.getElementById('prevGrade');
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
    updateGradingInfo();
    updateGradeSelects();
    
    // Add event listener for university selection (General tab)
    universitySelect.addEventListener('change', function() {
        currentUniversity = this.value;
        currentGradeOptions = universityGradingSystems[currentUniversity].grades;
        updateGradingInfo();
        updateGradeSelects();
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
    });
    
    // Add event listener for PDF download
    downloadPdfBtn.addEventListener('click', generatePDF);
    
    // Add initial rows
    for (let i = 0; i <3; i++) addRow();
    
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
    
    // Clear existing options
    selectElement.innerHTML = '';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = currentGradeOptions[0].letter;
    selectElement.appendChild(defaultOption);
    
    // Add grade options
    currentGradeOptions.forEach(grade => {
        const option = document.createElement('option');
        option.value = grade.value;
        option.textContent = grade.letter;
        if (grade.value.toString() === currentValue) {
            option.selected = true;
        }
        selectElement.appendChild(option);
    });
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
    // Only add unique grade options (no duplicates)
    const uniqueGrades = [];
    currentGradeOptions.forEach(gradeObj => {
        if (!uniqueGrades.some(g => g.value === gradeObj.value)) {
            uniqueGrades.push(gradeObj);
        }
    });
    // Add highest grade as the first option
    const highestGrade = uniqueGrades[0];
    const highestGradeOption = document.createElement('option');
    highestGradeOption.value = highestGrade.value;
    highestGradeOption.textContent = highestGrade.letter;
    gradeSelect.appendChild(highestGradeOption);
    // Add the rest of the grades (excluding the highest)
    uniqueGrades.slice(1).forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.value;
        opt.textContent = g.letter;
        if (grade !== null && g.value === grade) opt.selected = true;
        gradeSelect.appendChild(opt);
    });
    // If no grade is provided, default to highest
    if (grade === null) {
        gradeSelect.value = highestGrade.value;
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
            gradeSelect.value = highestGrade.value;
        }
    });
    creditsSelect.addEventListener('change', () => {
        if (courseInput.value && creditsSelect.value && !gradeSelect.value) {
            gradeSelect.value = highestGrade.value;
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
        let y = 40;

        // Header with colored background and logo
        pdf.setFillColor(59, 130, 246); // Tailwind blue-600
        pdf.rect(0, 0, pageWidth, 80, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(24);
        pdf.setFont('helvetica', 'bold');
        pdf.text('CGPA Report Card', pageWidth / 2, 50, { align: 'center' });
        // Small logo/illustration (simple SVG-like)
        pdf.setFillColor(251, 191, 36); // Tailwind yellow-400
        pdf.circle(pageWidth - 50, 40, 16, 'F');
        pdf.setFillColor(59, 130, 246);
        pdf.circle(pageWidth - 50, 40, 10, 'F');
        y = 100;

        // Student Information Section
        pdf.setFontSize(13);
        pdf.setTextColor(55, 65, 81); // Tailwind gray-700
        pdf.setFont('helvetica', 'bold');
        pdf.text('Student Information', 40, y);
        pdf.setDrawColor(59, 130, 246);
        pdf.setLineWidth(1);
        pdf.line(40, y + 4, pageWidth - 40, y + 4);
        y += 18;
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Name:', 50, y + 15);
        pdf.text('_________________________', 100, y + 15);
        pdf.text('Student ID:', 300, y + 15);
        pdf.text('_________________', 370, y + 15);
        pdf.text('Semester:', 500, y + 15);
        pdf.text('_____________', 560, y + 15);
        y += 30;

        // University & Date Section
        pdf.setFontSize(12);
        pdf.setTextColor(55, 65, 81);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`University: ${calculationData.university}`, 40, y);
        pdf.text(`Report Date: ${calculationData.calculationDate}`, 350, y);
        y += 30;

        // Summary Card
        pdf.setFillColor(236, 254, 255); // Tailwind cyan-50
        pdf.roundedRect(40, y, pageWidth - 80, 60, 12, 12, 'F');
        pdf.setFontSize(16);
        pdf.setTextColor(13, 148, 136); // Tailwind teal-600
        pdf.setFont('helvetica', 'bold');
        pdf.text('Summary', 55, y + 25);
        pdf.setFontSize(12);
        pdf.setTextColor(55, 65, 81);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Total CGPA:`, 200, y + 25);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(59, 130, 246);
        pdf.text(`${calculationData.cgpa.toFixed(2)}`, 270, y + 25);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(55, 65, 81);
        pdf.text(`Total Credits:`, 350, y + 25);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(251, 146, 60);
        pdf.text(`${calculationData.totalCredits % 1 === 0 ? calculationData.totalCredits : calculationData.totalCredits.toFixed(1)}`, 440, y + 25);
        y += 80;

        // Previous Credits Table (if any)
        if (calculationData.previousCredits.length > 0) {
            pdf.setFontSize(14);
            pdf.setTextColor(202, 138, 4); // Tailwind yellow-700
            pdf.setFont('helvetica', 'bold');
            pdf.text('Previous Credits', 40, y);
            y += 10;
            pdf.setDrawColor(251, 191, 36);
            pdf.setLineWidth(1);
            pdf.line(40, y + 4, pageWidth - 40, y + 4);
            y += 12;
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(55, 65, 81);
            // Table header
            pdf.setFillColor(254, 243, 199); // Tailwind yellow-100
            pdf.rect(40, y, pageWidth - 80, 22, 'F');
            pdf.text('Type', 50, y + 15);
            pdf.text('Credits', 180, y + 15);
            pdf.text('Grade', 260, y + 15);
            pdf.text('Grade Points', 340, y + 15);
            y += 24;
            // Table rows
            calculationData.previousCredits.forEach((item, idx) => {
                if (idx % 2 === 0) {
                    pdf.setFillColor(255, 251, 235); // Tailwind yellow-50
                    pdf.rect(40, y, pageWidth - 80, 20, 'F');
                }
                pdf.setTextColor(55, 65, 81);
                pdf.text(item.type, 50, y + 14);
                pdf.text(String(item.credits), 180, y + 14);
                pdf.text(String(item.grade), 260, y + 14);
                pdf.text(item.gradePoints.toFixed(2), 340, y + 14);
                y += 20;
            });
            y += 10;
        }

        // Course Details Table
        pdf.setFontSize(14);
        pdf.setTextColor(16, 185, 129); // Tailwind green-500
        pdf.setFont('helvetica', 'bold');
        pdf.text('Course Details', 40, y);
        y += 10;
        pdf.setDrawColor(16, 185, 129);
        pdf.setLineWidth(1);
        pdf.line(40, y + 4, pageWidth - 40, y + 4);
        y += 12;
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(55, 65, 81);
        // Table header
        pdf.setFillColor(209, 250, 229); // Tailwind green-100
        pdf.rect(40, y, pageWidth - 80, 22, 'F');
        pdf.text('Course', 50, y + 15);
        pdf.text('Credits', 180, y + 15);
        pdf.text('Grade', 260, y + 15);
        pdf.text('Grade Points', 340, y + 15);
        y += 24;
        // Table rows
        calculationData.courseDetails.forEach((item, idx) => {
            if (idx % 2 === 0) {
                pdf.setFillColor(236, 254, 255); // Tailwind cyan-50
                pdf.rect(40, y, pageWidth - 80, 20, 'F');
            }
            pdf.setTextColor(55, 65, 81);
            pdf.text(item.course, 50, y + 14);
            pdf.text(String(item.credits), 180, y + 14);
            pdf.text(String(item.grade), 260, y + 14);
            pdf.text(item.gradePoints.toFixed(2), 340, y + 14);
            y += 20;
        });
        y += 10;

        // Footer
        pdf.setFontSize(10);
        pdf.setTextColor(156, 163, 175); // Tailwind gray-400
        pdf.setFont('helvetica', 'normal');
        pdf.text('Generated by Bangladesh University CGPA Calculator', pageWidth / 2, 820, { align: 'center' });
        pdf.text(`Report generated on ${calculationData.calculationDate}`, pageWidth / 2, 835, { align: 'center' });

        // Save PDF
        const fileName = `CGPA_ReportCard_${calculationData.university.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
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
    
    // Calculate button
    const calcBtnTd = document.createElement('td');
    calcBtnTd.className = 'flex items-center justify-center h-full';
    const calcBtn = document.createElement('button');
    calcBtn.type = 'button';
    calcBtn.className = 'bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-3 rounded-lg transition flex items-center gap-1 shadow-md text-xs';
    calcBtn.innerHTML = '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>Calc';
    calcBtn.onclick = () => showSemesterCourseModal(row);
    calcBtnTd.appendChild(calcBtn);
    
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
    row.appendChild(calcBtnTd);
    row.appendChild(delBtnTd);
    semesterRows.appendChild(row);
}

function showSemesterCourseModal(semesterRow) {
    const semesterInput = semesterRow.querySelector('input[type="text"]');
    const cgpaInput = semesterRow.querySelector('input[placeholder="CGPA"]');
    const creditsInput = semesterRow.querySelector('input[placeholder="Credits"]');
    const semesterName = semesterInput.value || 'Semester';
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-purple-800">Calculate ${semesterName} CGPA</h3>
                <button class="text-gray-500 hover:text-gray-700 text-2xl" onclick="this.closest('.fixed').remove()">&times;</button>
            </div>
            <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="text-lg font-semibold text-gray-800">Add Courses</h4>
                    <button type="button" class="add-semester-course-btn bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-2 px-4 rounded-lg transition flex items-center gap-2 shadow-md text-sm" onclick="addSemesterCourseRow(this)">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        Add Course
                    </button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm mb-4">
                        <thead>
                            <tr class="bg-purple-100">
                                <th class="px-4 py-2 text-left">Course</th>
                                <th class="px-4 py-2 text-center">Credits</th>
                                <th class="px-4 py-2 text-center">Grade</th>
                                <th class="px-4 py-2 text-center">#</th>
                            </tr>
                        </thead>
                        <tbody class="semester-course-rows"></tbody>
                    </table>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <button type="button" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition" onclick="this.closest('.fixed').remove()">
                    Cancel
                </button>
                <button type="button" class="bg-gradient-to-br from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition" onclick="calculateSemesterFromCourses(this, '${cgpaInput.id}', '${creditsInput.id}')">
                    Calculate & Apply
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add initial course row
    const courseRowsContainer = modal.querySelector('.semester-course-rows');
    addSemesterCourseRow(modal.querySelector('.add-semester-course-btn'));
}

function addSemesterCourseRow(button) {
    const courseRowsContainer = button.closest('.bg-white').querySelector('.semester-course-rows');
    const row = document.createElement('tr');
    row.className = 'bg-purple-50 hover:bg-purple-100 transition';
    
    // Course input
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.placeholder = 'Course';
    courseInput.className = 'border rounded px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base';
    
    // Credits select
    const creditsSelect = document.createElement('select');
    creditsSelect.className = 'border rounded px-3 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-purple-300 text-base';
    const defaultCreditsOption = document.createElement('option');
    defaultCreditsOption.value = '';
    defaultCreditsOption.textContent = '0';
    creditsSelect.appendChild(defaultCreditsOption);
    creditsOptions.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        creditsSelect.appendChild(opt);
    });
    
    // Grade select
    const gradeSelect = document.createElement('select');
    gradeSelect.className = 'border rounded px-3 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-purple-300 text-base';
    const uniqueGrades = [];
    currentGradeOptions.forEach(gradeObj => {
        if (!uniqueGrades.some(g => g.value === gradeObj.value)) {
            uniqueGrades.push(gradeObj);
        }
    });
    const highestGrade = uniqueGrades[0];
    const highestGradeOption = document.createElement('option');
    highestGradeOption.value = highestGrade.value;
    highestGradeOption.textContent = highestGrade.letter;
    gradeSelect.appendChild(highestGradeOption);
    uniqueGrades.slice(1).forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.value;
        opt.textContent = g.letter;
        gradeSelect.appendChild(opt);
    });
    gradeSelect.value = highestGrade.value;
    
    // Delete button
    const delBtnTd = document.createElement('td');
    delBtnTd.className = 'flex items-center justify-center h-full';
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition shadow';
    delBtn.innerHTML = '&times;';
    delBtn.onclick = () => row.remove();
    delBtnTd.appendChild(delBtn);
    
    // Build row
    row.appendChild(createTd(courseInput));
    row.appendChild(createTd(creditsSelect));
    row.appendChild(createTd(gradeSelect));
    row.appendChild(delBtnTd);
    courseRowsContainer.appendChild(row);
}

function calculateSemesterFromCourses(button, cgpaInputId, creditsInputId) {
    const modal = button.closest('.fixed');
    const courseRows = modal.querySelectorAll('.semester-course-rows tr');
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    courseRows.forEach(row => {
        const [courseInput, creditsSelect, gradeSelect] = row.querySelectorAll('input, select');
        const course = courseInput.value.trim();
        const credits = parseFloat(creditsSelect.value);
        const grade = parseFloat(gradeSelect.value);
        
        if (course && !isNaN(credits) && credits > 0 && !isNaN(grade)) {
            totalCredits += credits;
            totalGradePoints += credits * grade;
        }
    });
    
    const semesterCgpa = totalCredits ? (totalGradePoints / totalCredits) : 0;
    
    // Update the semester row inputs
    const semesterRow = document.querySelector(`#${cgpaInputId}`) || 
                       document.querySelector('input[placeholder="CGPA"]');
    const creditsRow = document.querySelector(`#${creditsInputId}`) || 
                      document.querySelector('input[placeholder="Credits"]');
    
    if (semesterRow && creditsRow) {
        semesterRow.value = semesterCgpa.toFixed(2);
        creditsRow.value = totalCredits % 1 === 0 ? totalCredits : totalCredits.toFixed(2);
    }
    
    // Close modal
    modal.remove();
    
    // Show notification
    showNotification(`Semester CGPA calculated: ${semesterCgpa.toFixed(2)}`, 'success');
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
