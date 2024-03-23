document.addEventListener("DOMContentLoaded", function() {
    var deleteButtons = document.querySelectorAll('.delete-task-btn');
    deleteButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        var confirmDelete = confirm("Are you sure you want to delete this task?");
        if (!confirmDelete) {
          event.preventDefault();
        }
      });
    });
  });