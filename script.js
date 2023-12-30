 // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token value
 const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTcwMzk2MDExMCwibmJmIjoxNzAzOTYwMTEwLCJleHAiOjE3MDM5NjQ3OTQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84VkFBQUF1V25hcklYUDlZeGdHSldJVUVSdGo5YzJUODgrNURIUFRXR3JMcTlTVzhqUnpzSS91Rm4rTUtzY1lteE5ZalBOUkdseDFnVnlQT1dxaHdpMkRSQzVmWVlubXlvcVhzRnRyUnJVenRHbHZxbVFITWxRNDYwSnhXRzlzcUtXTnhXNXN1YVN4eVMvU0VRYTZRWlRVOWR6TU85SzI5REx2Q2xub3JxL0RGYi9PZjA9IiwiYW1yIjpbInJzYSIsIm1mYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImNvbnRyb2xzIjpbImFwcF9yZXMiXSwiY29udHJvbHNfYXVkcyI6WyIwMDAwMDAwOS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiXSwiZGV2aWNlaWQiOiI1Yzk0OTE5Yy0wNTY2LTQyZDMtOGY0Ny05MmViY2UwNjYzNmYiLCJmYW1pbHlfbmFtZSI6Ik9yYmV5IiwiZ2l2ZW5fbmFtZSI6IkVyZW4iLCJpcGFkZHIiOiI3Ni4xMTkuMTgzLjExNCIsIm5hbWUiOiJFcmVuIE9yYmV5Iiwib2lkIjoiMDcwMTIyMmItZjNmZi00NTQ3LWJiOGItZWM0N2NhZTcwYzU3Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEyNDUyNTA5NS03MDgyNTk2MzctMTU0MzExOTAyMS0yMDc1NzA0IiwicHVpZCI6IjEwMDMyMDAxOTJFNTI2NDIiLCJyaCI6IjAuQVJvQXY0ajVjdkdHcjBHUnF5MTgwQkhiUndrQUFBQUFBQUFBd0FBQUFBQUFBQUFhQVBjLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJkdmNfbW5nZCIsImR2Y19jbXAiLCJrbXNpIl0sInN1YiI6IkcyRnBiZWdTWkx3dEdCRmx5ZkE5cnBxd1cyb1ZETks3enNKc0JFTDlsRHciLCJ0aWQiOiI3MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDciLCJ1bmlxdWVfbmFtZSI6ImVyZW5vcmJleUBtaWNyb3NvZnQuY29tIiwidXBuIjoiZXJlbm9yYmV5QG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJnLVBBVl8zdXgwYXgtaGtPR3hrc0FRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdfQ.olRjQCge42RTx6OTVriJYV67AZhGWcWRhofIjbkvkjsfd9463nEwJ4-T33tbORG4pFIwiG1opAjLH-xjiZig3pkrQeJJM-wI0JP9PuUACTI12PKQr_6euHMbatu3PErwGLMHSRXB2cl4YMRW_6nb9G-Bz1C28T83vg_fvgZ_mDHSmKqxb0adPy8eze2YVi4-mbc_9faRF-g3hC3x_TDibI_9QqTk4ouhK_gq2gFhBrwPYnXXLXKKiiS1WLrMMlzfjpGDVpRef5Ju7q8LNS42GJqB99MYfOZti6aUQ-cKZcSuYYvb4TvaLuUB5oSmW_IyhZYHRXQFdUSIi4uRvZo7fg'
 
// Event listener for endpoint URL input change
document.getElementById('endpointUrl').addEventListener('input', function () {
    // Clear existing input fields
    document.getElementById('keyValuePairs').innerHTML = '';

    const endpointUrl = document.getElementById('endpointUrl').value;

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
        console.log(data)
        const endpointStatus = data.defaultStatus !== undefined ? data.defaultStatus : data.status;
        document.getElementById('endpointStatus').innerText = `Endpoint Status: ${endpointStatus}`;

        // Handle input signature and create input fields
        const inputSignature = data.defaultVersionInfo?.inputSignature || data.inputSignature;

        if (inputSignature) {
            createInputFields(JSON.parse(inputSignature));
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('endpointStatus').innerText = `Endpoint Status: Error`;
    });
});

document.getElementById('mlForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const endpointUrl = document.getElementById('endpointUrl').value;

    // Generate JSON payload based on individual values
    const keyValuePairs = document.querySelectorAll('#keyValuePairs .input-group');

    const individualData = {};
    keyValuePairs.forEach(pair => {
        // Check if it's a dynamically generated field
        const isDynamicField = pair.querySelector('.input-group-prepend span') !== null;

        if (isDynamicField) {
            const label = pair.querySelector('.input-group-prepend span').textContent;
            const value = pair.querySelector('.form-control').value;
            individualData[label] = !isNaN(value) ? parseFloat(value) : value;
        } else {
            // It's a manually added field
            const key = pair.querySelector('.form-control:nth-child(1)').value;
            const value = pair.querySelector('.form-control:nth-child(2)').value;
            individualData[key] = !isNaN(value) ? parseFloat(value) : value;
        }
    });

    const inputData = `[${JSON.stringify(individualData)}]`;
    console.log(inputData)

    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`,
        },
        body: inputData,
    })
    .then(response => {
        console.log(inputData)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('output').innerText = `Model Output: ${data}`;
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
            <input type="${inputType}" class="form-control" placeholder="${field.name}" data-type="${field.type}">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary remove-key-value-btn" type="button">Remove</button>
            </div>
        `;
        keyValuePairs.appendChild(newKeyValuePair);

        // Add event listener to remove key/value pair
        newKeyValuePair.querySelector('.remove-key-value-btn').addEventListener('click', function () {
            newKeyValuePair.remove();
        });

        // Add input event listener for validation
        const inputElement = newKeyValuePair.querySelector('.form-control');
        inputElement.addEventListener('input', function () {
            validateForm();
        });
    });

    // Initial validation
    validateForm();

    // Function to validate the form
    function validateForm() {
        const inputs = document.querySelectorAll('#keyValuePairs input.form-control');
        let formValid = true;

        inputs.forEach(inputElement => {
            const dataType = inputElement.getAttribute('data-type');

            if (dataType === 'double' && isNaN(inputElement.valueAsNumber)) {
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

        document.querySelector('button[type="submit"]').disabled = !formValid;
    }
}

// Event listener for adding key/value pairs
document.getElementById('addKeyValuePairBtn').addEventListener('click', function () {
    const keyValuePairs = document.getElementById('keyValuePairs');
    const newKeyValuePair = document.createElement('div');
    newKeyValuePair.classList.add('input-group', 'mb-3');
    newKeyValuePair.innerHTML = `
        <input type="text" class="form-control" placeholder="Key">
        <input type="text" class="form-control" placeholder="Value">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary remove-key-value-btn" type="button">Remove</button>
        </div>
    `;
    keyValuePairs.appendChild(newKeyValuePair);

    // Add event listener to remove key/value pair
    newKeyValuePair.querySelector('.remove-key-value-btn').addEventListener('click', function () {
        newKeyValuePair.remove();
    });
});
