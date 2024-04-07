    
  
    
    
    
    
    
    
    // Add event listeners to all options in section one
    const section1Options = document.querySelectorAll('#section1 .option');
    section1Options.forEach(option => {
        option.addEventListener('click', selectOption);
    });

    // Add event listeners to all options in section two
    const section2Options = document.querySelectorAll('#section2 .option');
    section2Options.forEach(option => {
        option.addEventListener('click', selectOption);
    });

    function selectOption() {
        // Check if any other option in the same question is selected
        const questionOptions = this.parentElement.querySelectorAll('.option');
        questionOptions.forEach(option => {
            option.classList.remove('selected');
        });
        // Add 'selected' class to the clicked option
        this.classList.add('selected');
        // Calculate total points for the current section
        calculatePoints();
    }




    function calculatePoints() {
        let section1Total = 0;
        let section2Total = 0;
        let bonus = 0;
        
    
        const section1SelectedOptions = document.querySelectorAll('#section1 .option.selected');
        section1SelectedOptions.forEach(option => {
            section1Total += parseInt(option.getAttribute('data-points'));
        });
        document.getElementById('section1Points').innerText = section1Total;

        const section2SelectedOptions = document.querySelectorAll('#section2 .option.selected');
        section2SelectedOptions.forEach(option => {
            section2Total += parseInt(option.getAttribute('data-points'));
        });
        document.getElementById('section2Points').innerText = section2Total;

        // if then else condition application to secnd section of score --------------------------------

        if (section2Total <= 12) {
            bonus = 10;
        } else if (section2Total > 12 && section2Total <= 24) {
            bonus = 20;
        } else if (section2Total > 24) {
            bonus = 30;
        }


            // The final scoring and percentage at the mo-------------------------------------------------
            // max possible value = 1000
            //  min possible value= 210
            let minValue = 210;
            let maxValue = 1000;

            let fScore = bonus + section1Total;
            fScore = 780;
            let pScore = fScore * 100/(maxValue-minValue);
            

            // assigning the values and sending of to print----------------------------------------

    document.getElementById('sectionTotalPoints').innerText = fScore;
    document.getElementById('sectionPercentPoints').innerText = pScore.toFixed(1) + " %";
}


// showing hiding blocs--------------------------------------



function showSection2() {
    // document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'block';
}



   // Add event listener to the "Done" button
   document.getElementById('doneButton').addEventListener('click', showPoints);

   function showPoints() {
       // Hide the button
       document.getElementById('doneButton').style.display = 'none';
       // Show the total points
       document.getElementById('result').style.display = 'block';
   }