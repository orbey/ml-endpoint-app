 // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token value
const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTcwMzk3MzczNSwibmJmIjoxNzAzOTczNzM1LCJleHAiOjE3MDM5Nzg0MzIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84VkFBQUFkYm5ZaU13TjlkS2JLbWwvV01ZT1pIaW9BaFhwMFVYWjVCMmVOQmVDYlp3RkRXZ1VPcmYycVBjMFhNVTU3dmRuUTNFc2ZQTVo0bVJjNkNjcFlhL1dYN2NJbTZtbXZya0FoQTJMNk1FWUdSRWNQTUJyWERwbXgvckhkcU1Jc2lCSFVqdGV2RmxBY0l3T2hWY3U2MVNYU21MVEhLRTFWdWhRY3NFei92UC9Rb2s9IiwiYW1yIjpbInJzYSIsIm1mYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImNvbnRyb2xzIjpbImFwcF9yZXMiXSwiY29udHJvbHNfYXVkcyI6WyI4NzFjMDEwZi01ZTYxLTRmYjEtODNhYy05ODYxMGE3ZTkxMTAiLCIwMDAwMDAwOS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiXSwiZGV2aWNlaWQiOiI1Yzk0OTE5Yy0wNTY2LTQyZDMtOGY0Ny05MmViY2UwNjYzNmYiLCJmYW1pbHlfbmFtZSI6Ik9yYmV5IiwiZ2l2ZW5fbmFtZSI6IkVyZW4iLCJpcGFkZHIiOiI3Ni4xMTkuMTgzLjExNCIsIm5hbWUiOiJFcmVuIE9yYmV5Iiwib2lkIjoiMDcwMTIyMmItZjNmZi00NTQ3LWJiOGItZWM0N2NhZTcwYzU3Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEyNDUyNTA5NS03MDgyNTk2MzctMTU0MzExOTAyMS0yMDc1NzA0IiwicHVpZCI6IjEwMDMyMDAxOTJFNTI2NDIiLCJyaCI6IjAuQVJvQXY0ajVjdkdHcjBHUnF5MTgwQkhiUndrQUFBQUFBQUFBd0FBQUFBQUFBQUFhQVBjLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJkdmNfbW5nZCIsImR2Y19jbXAiLCJrbXNpIl0sInN1YiI6IkcyRnBiZWdTWkx3dEdCRmx5ZkE5cnBxd1cyb1ZETks3enNKc0JFTDlsRHciLCJ0aWQiOiI3MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDciLCJ1bmlxdWVfbmFtZSI6ImVyZW5vcmJleUBtaWNyb3NvZnQuY29tIiwidXBuIjoiZXJlbm9yYmV5QG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJfblZmanRNeHAwZUhvd2hmdTU4dEFnIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.MsJcGgBZL0ek1GkgzTpWifS6oqF8f4gsxlp3vi6UJK9xHGa7yluFC2i6j4QY4smz5Q4SuftOerg8Profpxmsx-qyp2-C0RaF65R8s7KpPROQl3p7B_5wR6cL8Lmg4xDYgSxI8NJ9lRAOQlxHUaQYk7nzH6ngYQy31NVFt-Jbw40hQ9eIS7oYoXnY62_C1XdQFkjWu_kLCANUtNdgD_zOOU6Vi-dXvOjjSwUHDpoqppFJ1xa-WbE9ZQrCEj3zFugghJqVzDGLxaLZtVN0wWyajmuAj5VYtvYLns0kf1BRzhIIk_ujScPsWj1FThzu2sRvXZCbDwB-ZHz0_UcctwurFg';

document.getElementById('endpointUrl').addEventListener('input', function () {
    // Clear existing input fields and output signature
    document.getElementById('inputFields').innerHTML = '';
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
    const loadingSpinner = document.getElementById('loadingSpinner');
    const loadingMessage = document.getElementById('loadingMessage');

    // Hide model output and show loading spinner and message
    modelOutput.style.display = 'none';
    loadingSpinner.style.display = 'inline-block';
    loadingMessage.style.display = 'block';

    // Generate JSON payload based on individual values
    const keyValuePairs = document.querySelectorAll('#inputFields .input-group');
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
        // Hide loading spinner and message on response
        loadingSpinner.style.display = 'none';
        loadingMessage.style.display = 'none';

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
    const keyValuePairs = document.getElementById('inputFields');

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
    const inputs = document.querySelectorAll('#inputFields input.form-control');
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