document.getElementById('interests-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const interests = document.getElementById('interests').value.trim();
    if (interests !== '') {
        // Define mappings between interests, courses, and colleges
        const interestMappings = {
            'technology': ['Computer Science', 'Information Technology', 'Software Engineering'],
            'design': ['Graphic Design', 'Fashion Design', 'Interior Design'],
            'marketing': ['Marketing', 'Advertising', 'Digital Marketing'],
            'medicine': ['Medicine', 'Nursing', 'Pharmacy'],
            'finance': ['Finance', 'Accounting', 'Economics'],
            'arts': ['Fine Arts', 'Performing Arts', 'Visual Arts'],
            'hospitality': ['Hospitality Management', 'Culinary Arts', 'Hotel Management'],
            'science': ['Physics', 'Chemistry', 'Biology'],
            'art': ['Art History', 'Studio Art', 'Art Education'],
            'music': ['Music Performance', 'Music Composition', 'Music Education'],
            'fashion': ['Fashion Merchandising', 'Fashion Marketing', 'Fashion Management'],
            'agriculture': ['Agricultural Science', 'Agricultural Engineering', 'Agribusiness'],
            'business': ['Business Administration', 'Management', 'Entrepreneurship'],
            'honors': ['Honors Program', 'Advanced Studies', 'Specialized Programs'],
            'english': ['English Literature', 'Creative Writing', 'Linguistics']
        };

        const collegeMappings = {
            'technology': ['Indian Institute of Technology (IIT)', 'National Institute of Technology (NIT)', 'BITS Pilani'],
            'design': ['National Institute of Design (NID)', 'Pearl Academy', 'NIFT'],
            'marketing': ['Indian Institute of Management (IIM)', 'Xavier School of Management (XLRI)', 'SP Jain Institute of Management and Research'],
            'medicine': ['All India Institute of Medical Sciences (AIIMS)', 'Christian Medical College (CMC)', 'Armed Forces Medical College (AFMC)'],
            'finance': ['Indian Institute of Management (IIM)', 'Indian School of Business (ISB)', 'Delhi School of Economics'],
            'arts': ['Faculty of Fine Arts, MS University of Baroda', 'College of Arts, Delhi University', 'Sir JJ School of Arts'],
            'hospitality': ['Institute of Hotel Management (IHM)', 'Welcomgroup Graduate School of Hotel Administration (WGSHA)', 'Oberoi Centre of Learning and Development (OCLD)'],
            'science': ['St. Stephen\'s College', 'Loyola College', 'Hindu College'],
            'art': ['Faculty of Fine Arts, MS University of Baroda', 'College of Arts, Delhi University', 'Sir JJ School of Arts'],
            'music': ['Berklee College of Music', 'Julliard School', 'Royal College of Music'],
            'fashion': ['National Institute of Fashion Technology (NIFT)', 'Pearl Academy', 'National Institute of Design (NID)'],
            'agriculture': ['Indian Agricultural Research Institute (IARI)', 'Punjab Agricultural University (PAU)', 'National Dairy Research Institute (NDRI)'],
            'business': ['Indian Institute of Management (IIM)', 'Indian School of Business (ISB)', 'XLRI Xavier School of Management'],
            'honors': ['Various universities offer honors programs.'],
            'english': ['St. Stephen\'s College', 'Loyola College', 'Hindu College']
        };

        // Display career options
        const careerList = document.getElementById('career-list');
        careerList.innerHTML = '';
        const careers = interestMappings[interests];
        if (careers) {
            careers.forEach(career => {
                const listItem = document.createElement('li');
                listItem.textContent = career;
                careerList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'No career options found for this interest.';
            careerList.appendChild(listItem);
        }

        // Display college options
        const collegeList = document.getElementById('college-list');
        collegeList.innerHTML = '';
        const colleges = collegeMappings[interests];
        if (colleges) {
            colleges.forEach(college => {
                const listItem = document.createElement('li');
                const collegeName = document.createElement('div');
                collegeName.classList.add('college-name');
                collegeName.textContent = college;
                listItem.appendChild(collegeName);

                const collegeDetails = document.createElement('div');
                collegeDetails.classList.add('college-details');
                collegeDetails.innerHTML = `
                    <p>Cut Off Rank: XYZ</p>
                    <p>Location: ABC</p>
                    <!-- Add more details as needed -->
                `;
                listItem.appendChild(collegeDetails);

                collegeList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'No college options found for this interest.';
            collegeList.appendChild(listItem);
        }
    } else {
        alert('Please select your interests.');
    }
});

// Toggle visibility of college details when a college name is clicked
document.querySelectorAll('.college-name').forEach(collegeName => {
    collegeName.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

// Reset form
document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('interests').selectedIndex = 0;
    document.getElementById('career-list').innerHTML = '';
    document.getElementById('college-list').innerHTML = '';
});
