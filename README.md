# Bangladesh University CGPA Calculator

A comprehensive web-based CGPA (Cumulative Grade Point Average) calculator designed specifically for Bangladeshi universities. This tool supports multiple universities with their respective grading systems and provides an intuitive interface for students to calculate their academic performance.

## 🌟 Features

### **Multi-University Support**
- **30+ Bangladeshi Universities** supported with accurate grading systems
- **Dynamic Grade Selection** - automatically updates based on selected university
- **Real-time Grading System Display** - shows current university's grading scale

### **Supported Universities**
1. **North South University (NSU)** - Standard 4.0 scale
2. **University of Dhaka (DU)** - Modified 4.0 scale with A+
3. **BRAC University** - Modified 4.0 scale
4. **Jahangirnagar University (JU)** - Modified 4.0 scale
5. **Daffodil International University** - Modified 4.0 scale
6. **Bangladesh University of Engineering and Technology (BUET)** - Modified 4.0 scale
7. **East West University (EWU)** - Modified 4.0 scale
8. **United International University (UIU)** - Modified 4.0 scale
9. **American International University - Bangladesh (AIUB)** - Modified 4.0 scale
10. **Bangabandhu Sheikh Mujibur Rahman Agricultural University (BSMRAU)** - Modified 4.0 scale
11. **University of Rajshahi (RU)** - Modified 4.0 scale
12. **Stamford University Bangladesh** - Modified 4.0 scale
13. **Bangladesh University** - Modified 4.0 scale
14. **Dhaka International University** - Modified 4.0 scale
15. **Dhaka University of Engineering and Technology (DUET)** - Modified 4.0 scale
16. **Chittagong University of Engineering and Technology (CUET)** - Modified 4.0 scale
17. **Independent University, Bangladesh (IUB)** - Modified 4.0 scale
18. **IUBAT - International University of Business Agriculture and Technology** - Modified 4.0 scale
19. **University of Asia Pacific (UAP)** - Modified 4.0 scale
20. **World University of Bangladesh (WUB)** - Modified 4.0 scale
21. **Southeast University (SEU)** - Modified 4.0 scale
22. **Green University of Bangladesh** - Modified 4.0 scale
23. **Bangladesh Agricultural University (BAU)** - Modified 4.0 scale
24. **Islamic University of Technology (IUT)** - Modified 4.0 scale
25. **Jagannath University (JnU)** - Modified 4.0 scale
26. **Sher-e-Bangla Agricultural University** - Modified 4.0 scale
27. **Shahjalal University of Science and Technology (SUST)** - Modified 4.0 scale
28. **Rajshahi University of Engineering & Technology (RUET)** - Modified 4.0 scale
29. **Khulna University of Engineering & Technology (KUET)** - Modified 4.0 scale

### **Grading Systems**

#### **NSU (North South University) - Standard 4.0 Scale**
- A (4.0), A− (3.7), B+ (3.3), B (3.0), B− (2.7)
- C+ (2.3), C (2.0), C− (1.7), D+ (1.3), D (1.0), F (0.0)

#### **Other Universities - Modified 4.0 Scale**
- A+ (4.0), A (3.75), A− (3.5), B+ (3.25), B (3.0), B− (2.75)
- C+ (2.5), C (2.25), D (2.0), F (0.0)

### **Core Features**
- **Dynamic Course Management** - Add/remove courses as needed
- **Previous Credits Integration** - Include existing academic history
- **Real-time Calculation** - Instant CGPA updates
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- **Credit Options** - Support for 1, 1.5, 2, 3, and 4 credit courses

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### **Installation**
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start calculating your CGPA!

### **Usage**
1. **Select Your University** - Choose from the dropdown menu
2. **Add Previous Credits** (Optional) - Enter existing credits and grade
3. **Add Courses** - Click the "+" button to add course rows
4. **Enter Course Details** - Fill in course name, credits, and grade
5. **Calculate CGPA** - Click "Calculate CGPA" to see results
6. **View Results** - Check the summary cards for CGPA and total credits

## 📁 Project Structure

```
bangladesh-university-cgpa-calculator/
├── index.html          # Main HTML file with UI
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .git/               # Git repository
```

## 🛠️ Technical Details

### **Technologies Used**
- **HTML5** - Structure and semantics
- **CSS3** - Styling with Tailwind CSS framework
- **JavaScript (ES6+)** - Dynamic functionality and calculations
- **Tailwind CSS** - Utility-first CSS framework for responsive design

### **Key Functions**
- `initializeApp()` - Initialize the application
- `updateGradingInfo()` - Update grading system display
- `updateGradeSelects()` - Update all grade selection dropdowns
- `createRow()` - Create new course input rows
- `calculateCGPA()` - Perform CGPA calculations
- `getRowsData()` - Collect form data for processing

### **Browser Compatibility**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 Features in Detail

### **University Selection**
- Dropdown menu with all supported universities
- Automatic grade system updates
- Real-time grading information display

### **Course Management**
- Dynamic row addition/removal
- Input validation
- Responsive grid layout
- Hover effects and smooth transitions

### **Calculation Engine**
- Weighted average calculation
- Previous credits integration
- Real-time updates
- Decimal precision handling

### **User Interface**
- Modern gradient background
- Card-based layout
- Responsive design
- Mobile-friendly interface
- Accessibility features

## 🔧 Customization

### **Adding New Universities**
To add a new university, update the `universityGradingSystems` object in `script.js`:

```javascript
newUniversity: {
    name: "University Name",
    grades: [
        { letter: 'A+', value: 4.0 },
        { letter: 'A', value: 3.75 },
        // ... add all grades
    ]
}
```

### **Modifying Grading Systems**
Edit the grades array for any university to match their specific grading scale.

### **Styling Changes**
The project uses Tailwind CSS classes. Modify the classes in HTML or add custom CSS as needed.

## 📱 Mobile Support

The calculator is fully responsive and optimized for mobile devices:
- Touch-friendly interface
- Responsive grid layouts
- Mobile-optimized button sizes
- Swipe-friendly interactions

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Add new universities
- Improve the UI/UX
- Fix bugs or issues
- Add new features
- Update documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure you're using a supported browser
3. Verify all files are properly loaded
4. Contact the development team

## 🎓 Educational Use

This calculator is designed for educational purposes and should be used as a reference tool. Always verify calculations with your university's official grading system.

---

**Built with ❤️ for Bangladeshi students** 