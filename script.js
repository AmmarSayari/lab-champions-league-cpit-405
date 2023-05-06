function myFunction() {
	
	var input = document.getElementById("myInput");
	var filter = input.value.toUpperCase();

	var table = document.getElementById("myTable");
	var trows = table.getElementsByTagName("tr");
    
	for (var i = 0; i < trows.length; i++) {

        var td = trows[i].getElementsByTagName("td")[1];
        var td2 = trows[i].getElementsByTagName("td")[2];

        if (td || td2) {

            var txtValue = td.textContent || td.innerText;
            txtValue = txtValue.toUpperCase();

            var txtValue2 = td2.textContent || td.innerText;
            txtValue2 = txtValue2.toUpperCase();

            //console.log()
            if (txtValue.indexOf(filter) > -1 || txtValue2.indexOf(filter) > -1) {
				trows[i].style.display = "";
			} else {
				trows[i].style.display = "none";
			}
		}       
	}
    
}


document.getElementById("myInput").addEventListener("keyup", myFunction);
