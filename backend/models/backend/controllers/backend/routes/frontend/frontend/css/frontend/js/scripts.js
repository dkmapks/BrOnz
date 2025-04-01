document.getElementById('documentForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: event.target.name.value,
    surname: event.target.surname.value,
    idNumber: event.target.idNumber.value,
    birthDate: event.target.birthDate.value,
    photo: event.target.photo.value
  };

  try {
    const response = await fetch('/api/documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const document = await response.json();
      alert('Document generated successfully!');
      console.log(document);
    } else {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});
