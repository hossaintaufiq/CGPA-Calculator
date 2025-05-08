// NSU grade options
const gradeOptions = [
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
];

const creditsOptions = [1, 1.5, 2, 3, 4];

const coursesContainer = document.getElementById('coursesContainer');
const prevCreditsInput = document.getElementById('prevCredits');
const prevGradeSelect = document.getElementById('prevGrade');

// For SVG progress circles
const cgpaArc = document.getElementById('cgpaArc');
const cgpaValue = document.getElementById('cgpaValue');
const creditsArc = document.getElementById('creditsArc');
const creditsValue = document.getElementById('creditsValue');
const CIRCLE_LENGTH = 502; // 2 * PI * r (r=80)
const MAX_CGPA = 4.0;
const MAX_CREDITS = 150; // You can adjust this as needed

function setProgressArc(arcElem, value, max, color) {
    const percent = Math.max(0, Math.min(1, value / max));
    const offset = CIRCLE_LENGTH * (1 - percent);
    arcElem.style.strokeDashoffset = offset;
    arcElem.style.stroke = color;
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
    gradeSelect.className = 'border rounded px-3 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-300 text-base md:text-lg';
    const defaultGradeOption = document.createElement('option');
    defaultGradeOption.value = '';
    defaultGradeOption.textContent = 'A';
    gradeSelect.appendChild(defaultGradeOption);
    gradeOptions.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.value;
        opt.textContent = g.letter;
        if (g.value === grade) opt.selected = true;
        gradeSelect.appendChild(opt);
    });

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

    // Update summary card values only
    document.getElementById('cgpaValue').textContent = cgpa.toFixed(2);
    document.getElementById('creditsValue').textContent = totalCredits % 1 === 0 ? totalCredits : totalCredits.toFixed(1);
}

// Initial rows
for (let i = 0; i < 3; i++) addRow();

// Only update on form submit
const cgpaForm = document.getElementById('cgpaForm');
cgpaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCGPA();
}); 