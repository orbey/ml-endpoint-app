 // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token value
const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTcwMzk2OTEzOSwibmJmIjoxNzAzOTY5MTM5LCJleHAiOjE3MDM5NzQ3NjQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84VkFBQUFPQkE1QlJHZE1UUWVCZHRZcWViOEJYZFY1SmJNYnV2YThxd3ZEenJFMElTQ1p3VmluL3FCUDFhVzlETFZQU0lSejF2cW5HQndBSUYwWVBDN3E5Y2ZxblpMTW1SZS9jZCswVWhmeXlxSlpJeDNaM0JHVjZjOXphMkZNUCtSSDZqTi9pcGFKejdoNk5PbWRxM2JCVmd6bDNwK0RvaStwc2FQaUx3Rzcya1ZkRzA9IiwiYW1yIjpbInJzYSIsIm1mYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImNvbnRyb2xzIjpbImFwcF9yZXMiXSwiY29udHJvbHNfYXVkcyI6WyIwMDAwMDAwOS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiXSwiZGV2aWNlaWQiOiI1Yzk0OTE5Yy0wNTY2LTQyZDMtOGY0Ny05MmViY2UwNjYzNmYiLCJmYW1pbHlfbmFtZSI6Ik9yYmV5IiwiZ2l2ZW5fbmFtZSI6IkVyZW4iLCJpcGFkZHIiOiI3Ni4xOS4xNjguMTk1IiwibmFtZSI6IkVyZW4gT3JiZXkiLCJvaWQiOiIwNzAxMjIyYi1mM2ZmLTQ1NDctYmI4Yi1lYzQ3Y2FlNzBjNTciLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTI0NTI1MDk1LTcwODI1OTYzNy0xNTQzMTE5MDIxLTIwNzU3MDQiLCJwdWlkIjoiMTAwMzIwMDE5MkU1MjY0MiIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSd2tBQUFBQUFBQUF3QUFBQUFBQUFBQWFBUGMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRzJGcGJlZ1NaTHd0R0JGbHlmQTlycHF3VzJvVkROSzd6c0pzQkVMOWxEdyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoiZXJlbm9yYmV5QG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJlcmVub3JiZXlAbWljcm9zb2Z0LmNvbSIsInV0aSI6IjBoLVVaV1lEOFUyZ3NUZlEyREE3QWciLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl19.dgLQzep6D_gfENEyfvh4RzgnJnmi6Ek0kFxYmBh7puCweV05NAWmezGBaYonHZlE83OMwK74NeCFb2S6F9O9Ym6sFeg6rD0UYWcvfy_asq5FVxEbzK-zl3J6zStaLOl8poLLPvQa6Q4rQ83Aa2betcwBw6bIfbuYqZqSAvlVofYmUrlurqMxik9-S4GXZYvl7pfQlkiU_-9EkRVB5bSPaqflwtRPXKkUR6oyY0LFFIakxPFiNaQ1QAN2mZYLi7QK8jKr1Y5P7ru-X45SnwffuMrmiZ5s_f73ez4AX35K24oo0mb8mwu1MGwQTlUxwCvt4BX7HdL2dFXV36fDuh17KQ'

document.getElementById('endpointUrl').addEventListener('input', function () {
    // Clear existing input fields and output signature
    document.getElementById('keyValuePairs').innerHTML = '';
    document.getElementById('output').innerHTML = '';

    const endpointUrl = document.getElementById('endpointUrl').value;
    const submitButton = document.querySelector('#mlForm button[type="submit"]');
    const modelOutput = document.getElementById('output');

    // Hide model output
    modelOutput.style.display = 'none';

    fetch(endpointUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`,
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const endpointStatus = data.defaultStatus !== undefined ? data.defaultStatus : data.status;
        document.getElementById('endpointStatus').innerText = `Endpoint Status: ${endpointStatus}`;

        // Handle input signature and create input fields
        const inputSignature = data.defaultVersionInfo?.inputSignature || data.inputSignature;

        if (inputSignature) {
            createInputFields(JSON.parse(inputSignature));
        }

        // Handle output signature and display it
        const outputSignature = data.defaultVersionInfo?.outputSignature || data.outputSignature;

        if (outputSignature) {
            displayOutputSignature(JSON.parse(outputSignature));
        }

        // Show submit button if the endpoint status is "Running"
        submitButton.style.display = endpointStatus === 'Running' ? 'block' : 'none';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('endpointStatus').innerText = `Endpoint Status: Error`;

        // Hide submit button if there's an error
        submitButton.style.display = 'none';
    });
});


document.getElementById('mlForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const endpointUrl = document.getElementById('endpointUrl').value;
    const modelOutput = document.getElementById('output');

    // Hide model output
    modelOutput.style.display = 'none';

    // Generate JSON payload based on individual values
    const keyValuePairs = document.querySelectorAll('#keyValuePairs .input-group');
    const individualData = {};

    keyValuePairs.forEach(pair => {
        const label = pair.querySelector('.input-group-prepend span').textContent;
        const value = pair.querySelector('.form-control').value;
        individualData[label] = !isNaN(value) ? parseFloat(value) : value;
    });

    const inputData = `[${JSON.stringify(individualData)}]`;

    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`,
        },
        body: inputData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Display model output
        modelOutput.innerText = `Model Output: ${data}`;
        modelOutput.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Function to create input fields based on the input signature
function createInputFields(signature) {
    const keyValuePairs = document.getElementById('keyValuePairs');

    signature.forEach(field => {
        const newKeyValuePair = document.createElement('div');
        newKeyValuePair.classList.add('input-group', 'mb-3');
        const inputType = field.type === 'double' ? 'number' : 'text';
        newKeyValuePair.innerHTML = `
            <div class="input-group-prepend">
                <span class="input-group-text">${field.name} (${field.type})</span>
            </div>
            <input type="${inputType}" step="any" class="form-control" placeholder="${field.name}" data-type="${field.type}">
        `;
        keyValuePairs.appendChild(newKeyValuePair);

        // Add input event listener for validation
        const inputElement = newKeyValuePair.querySelector('.form-control');
        inputElement.addEventListener('input', validateForm);
    });

    // Initial validation
    validateForm();
}

function displayOutputSignature(signature) {
    const outputDiv = document.getElementById('output');
    console.log(signature)

    signature.forEach(field => {
        const outputField = document.createElement('div');
        outputField.classList.add('output-field');
        outputField.innerHTML = `
            <p>${field.name} (${field.type})</p>
        `;
        outputDiv.appendChild(outputField);
    });

    // Display the output section
    outputDiv.style.display = 'block';
}

// Function to validate the form
function validateForm() {
    const inputs = document.querySelectorAll('#keyValuePairs input.form-control');
    let formValid = true;

    inputs.forEach(inputElement => {
        const dataType = inputElement.getAttribute('data-type');

        if (dataType === 'double' && (isNaN(inputElement.valueAsNumber))) {
            inputElement.style.border = '1px solid red';

            // Add warning icon
            inputElement.classList.add('is-invalid');
            formValid = false;
        } else {
            inputElement.style.border = ''; // Remove the red border

            // Remove warning icon
            inputElement.classList.remove('is-invalid');
        }
    });

    const submitButton = document.querySelector('#mlForm button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = !formValid;
    }
}