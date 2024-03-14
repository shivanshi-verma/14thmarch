function validateForm() {
    var productId = document.getElementById('productId').value;
    var purchaseDate = document.getElementById('purchaseDate').value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var review = document.getElementById('review').value;
  
    if (!productId || !purchaseDate || !rating || !review) {
      showError("Please fill out all required fields.");
      return false;
    }
  
    if (rating.value <= 1) {
      document.getElementById('imageUpload').style.display = 'block';
    } else {
      document.getElementById('imageUpload').style.display = 'none';
    }
  
    // Check purchase date validity
    var currentDate = new Date();
    var purchaseDateTime = new Date(purchaseDate);
    var differenceInTime = currentDate.getTime() - purchaseDateTime.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    if (differenceInDays > 14) {
      alert("It's been more than 2 weeks since your purchase date. Consider escalating your issue.");
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  function showError(message) {
    alert(message);
  }
  