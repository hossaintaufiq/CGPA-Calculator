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

// Current university and grade options
let currentUniversity = 'nsu';
let currentGradeOptions = universityGradingSystems.nsu.grades;

// Initialize the application
function initializeApp() {
    updateGradingInfo();
    updateGradeSelects();
    
    // Add event listener for university selection
    universitySelect.addEventListener('change', function() {
        currentUniversity = this.value;
        currentGradeOptions = universityGradingSystems[currentUniversity].grades;
        updateGradingInfo();
        updateGradeSelects();
    });
    
    // Add initial rows
    for (let i = 0; i < 3; i++) addRow();
}

// Update grading information display
function updateGradingInfo() {
    const university = universityGradingSystems[currentUniversity];
    const gradeText = university.grades.map(g => `${g.letter} (${g.value})`).join(', ');
    gradingInfo.innerHTML = `<strong>${university.name} Grading System:</strong> ${gradeText}`;
}

// Update all grade select elements
function updateGradeSelects() {
    // Update previous grade select
    updateGradeSelect(prevGradeSelect);
    
    // Update all course grade selects
    const courseGradeSelects = document.querySelectorAll('.course-grade-select');
    courseGradeSelects.forEach(select => {
        updateGradeSelect(select);
    });
}

// Update a single grade select element
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

function createRow(course = '', credits = 0, grade = 4.0) {
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
    updateGradeSelect(gradeSelect);

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'ml-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-lg md:text-2xl font-bold transition';
    delBtn.innerHTML = '&times;';
    delBtn.onclick = () => {
        row.remove();
    };

    row.appendChild(courseInput);
    row.appendChild(creditsSelect);
    row.appendChild(gradeSelect);
    row.appendChild(delBtn);
    coursesContainer.appendChild(row);
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

    // Previous credits and grade
    const prevCredits = parseFloat(prevCreditsInput.value);
    const prevGrade = parseFloat(prevGradeSelect.value);
    if (!isNaN(prevCredits) && prevCredits > 0 && !isNaN(prevGrade)) {
        totalCredits += prevCredits;
        totalGradePoints += prevCredits * prevGrade;
    }

    // Dynamic rows
    const data = getRowsData().filter(r => r.credits && !isNaN(r.grade));
    data.forEach(row => {
        totalCredits += row.credits;
        totalGradePoints += row.credits * row.grade;
    });
    
    const cgpa = totalCredits ? (totalGradePoints / totalCredits) : 0;

    // Update summary card values
    document.getElementById('cgpaValue').textContent = cgpa.toFixed(2);
    document.getElementById('creditsValue').textContent = totalCredits % 1 === 0 ? totalCredits : totalCredits.toFixed(1);
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
});
