/**
 * University Grading Systems for Bangladesh Universities
 * This file contains the official grading systems for various Bangladeshi universities.
 * Each university has its own unique grading scale that must be used for accurate CGPA calculation.
 */

// University grading systems
export const universityGradingSystems = {
    // North South University (NSU) - Standard 4.0 scale
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

    // University of Dhaka (DU) - Modified 4.0 scale
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

    // BRAC University - Modified 4.0 scale
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

    // Jahangirnagar University (JU) - Modified 4.0 scale
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

    // Daffodil International University - Modified 4.0 scale
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

    // Bangladesh University of Engineering and Technology (BUET) - Modified 4.0 scale
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

    // East West University (EWU) - Modified 4.0 scale
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

    // United International University (UIU) - Modified 4.0 scale
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

    // American International University - Bangladesh (AIUB) - NO A- or B- grades
    aiub: {
        name: "American International University - Bangladesh (AIUB)",
        grades: [
            { letter: 'A+', value: 4.0 },
            { letter: 'A', value: 3.75 },
            { letter: 'B+', value: 3.50 },
            { letter: 'B', value: 3.25 },
            { letter: 'C+', value: 3.00 },
            { letter: 'C', value: 2.75 },
            { letter: 'D+', value: 2.50 },
            { letter: 'D', value: 2.25 },
            { letter: 'F', value: 0.0 }
        ]
    },

    // Bangabandhu Sheikh Mujibur Rahman Agricultural University (BSMRAU) - Modified 4.0 scale
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

    // University of Rajshahi (RU) - Modified 4.0 scale
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

    // Stamford University Bangladesh - Modified 4.0 scale
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

    // Bangladesh University - Modified 4.0 scale
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

    // Dhaka International University - Modified 4.0 scale
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

    // Dhaka University of Engineering and Technology (DUET) - Modified 4.0 scale
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

    // Chittagong University of Engineering and Technology (CUET) - Modified 4.0 scale
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

    // Independent University, Bangladesh (IUB) - Modified 4.0 scale
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

    // IUBAT - International University of Business Agriculture and Technology - Modified 4.0 scale
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

    // University of Asia Pacific (UAP) - Modified 4.0 scale
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

    // World University of Bangladesh (WUB) - Modified 4.0 scale
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

    // Southeast University (SEU) - Modified 4.0 scale
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

    // Green University of Bangladesh - Modified 4.0 scale
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

    // Bangladesh Agricultural University (BAU) - Modified 4.0 scale
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

    // Islamic University of Technology (IUT) - Modified 4.0 scale
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

    // Jagannath University (JnU) - Modified 4.0 scale
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

    // Sher-e-Bangla Agricultural University - Modified 4.0 scale
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

    // Shahjalal University of Science and Technology (SUST) - Modified 4.0 scale
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

    // Rajshahi University of Engineering & Technology (RUET) - Modified 4.0 scale
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

    // Khulna University of Engineering & Technology (KUET) - Modified 4.0 scale
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
export const creditsOptions = [1, 1.5, 2, 3, 4];

// Helper function to get university by code
export function getUniversityByCode(code) {
    return universityGradingSystems[code] || null;
}

// Helper function to get all university names
export function getAllUniversityNames() {
    return Object.values(universityGradingSystems).map(uni => uni.name);
}

// Helper function to validate grade for a university
export function validateGrade(universityCode, gradeValue) {
    const university = getUniversityByCode(universityCode);
    if (!university) return false;
    
    return university.grades.some(grade => grade.value === gradeValue);
}

// Helper function to get grade letter by value for a university
export function getGradeLetter(universityCode, gradeValue) {
    const university = getUniversityByCode(universityCode);
    if (!university) return null;
    
    const grade = university.grades.find(g => g.value === gradeValue);
    return grade ? grade.letter : null;
}

// Helper function to get grade value by letter for a university
export function getGradeValue(universityCode, gradeLetter) {
    const university = getUniversityByCode(universityCode);
    if (!university) return null;
    
    const grade = university.grades.find(g => g.letter === gradeLetter);
    return grade ? grade.value : null;
} 