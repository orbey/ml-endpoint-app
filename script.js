 // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token value
const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTcwNTA3OTk3OSwibmJmIjoxNzA1MDc5OTc5LCJleHAiOjE3MDUwODQ4MTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84VkFBQUFhMjE3V3pRc2I1TDM2UEMvcU4wcjFCYjAvYXVXUVNhdjFSK01JVlZ0SVdSVUJsdEJmZWNuQkoyalYzNmNkU1VNc29XOVUrbW85NzVoRUFXRExyUEE4dnBRYnV5SGFtTGxPV0lSbTJMekhqaGpVeGRjZGJUeDJnSm1hY1ZmVXZHT0taOGNlRVBPRE1yK0VoeVpZcTRkZXBNcGwwZ3htUGIxcDQ4VVkxbXRHbDg9IiwiYW1yIjpbInJzYSIsIm1mYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImNvbnRyb2xzIjpbImFwcF9yZXMiXSwiY29udHJvbHNfYXVkcyI6WyIwMDAwMDAwOS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiXSwiZGV2aWNlaWQiOiI1Yzk0OTE5Yy0wNTY2LTQyZDMtOGY0Ny05MmViY2UwNjYzNmYiLCJmYW1pbHlfbmFtZSI6Ik9yYmV5IiwiZ2l2ZW5fbmFtZSI6IkVyZW4iLCJpcGFkZHIiOiI3Ni4xOS4xNjguMTk1IiwibmFtZSI6IkVyZW4gT3JiZXkiLCJvaWQiOiIwNzAxMjIyYi1mM2ZmLTQ1NDctYmI4Yi1lYzQ3Y2FlNzBjNTciLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTI0NTI1MDk1LTcwODI1OTYzNy0xNTQzMTE5MDIxLTIwNzU3MDQiLCJwdWlkIjoiMTAwMzIwMDE5MkU1MjY0MiIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSd2tBQUFBQUFBQUF3QUFBQUFBQUFBQWFBUGMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRzJGcGJlZ1NaTHd0R0JGbHlmQTlycHF3VzJvVkROSzd6c0pzQkVMOWxEdyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoiZXJlbm9yYmV5QG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJlcmVub3JiZXlAbWljcm9zb2Z0LmNvbSIsInV0aSI6IlRjVHVUMEx0bVVxWXA4UmdtWUFXQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl19.GxYxUOWtR4xbB6FyDfb-h_cYo8ri7vdnbMGs5158pOWPcpsMM2NuHO5VWALpd1dj8aDtQrsVniBUkF1hgOYIGqcv1RbzRUovVOstGuBEoLH9JQ-AHb1Mvo2stnN_Xea16mNWrNVBQLhrLD2qn7oJUfYZ2k_BeXLyXqTTM-MncafWyv_VQZwHcFblCogoEfdeDYz-PV6Vwukq27L8-EORxKl5RVjsoQTBVWJSAJ0P4ARVHL1iAFj1z03hFciKTLXFY43WuYRU5HkBRA0Iuly8rnUN4BoRLa0r_cVNgx_usomaRTXXTjQP_1vyqZ5QzQ-FCQ1FgRsJ0KmeUTXbk1E_cw';
let timeoutId;

// Function to handle endpoint input events
function handleEndpointInput() {
    // Clear existing timeout
    clearTimeout(timeoutId);

    // Set a timeout to wait for 1000 milliseconds (1 second) after the user stops typing
    timeoutId = setTimeout(() => {
        // Clear existing input fields and output signature
        document.getElementById('inputFields').innerHTML = '';
        document.getElementById('output').innerHTML = '';

        const endpointUrl = document.getElementById('endpointUrl').value;
        const endpointStatusElement = document.getElementById('endpointStatus');
        const submitButton = document.querySelector('#mlForm button[type="submit"]');
        const modelOutput = document.getElementById('output');

        // Hide model output
        modelOutput.style.display = 'none';

        if (!endpointUrl.trim()) {
            // If endpoint URL is empty, do not make a fetch request and reset the message
            endpointStatusElement.innerText = 'We\'ll display the status of your endpoint here.';
            return;
        }

        // Update the message without clearing
        endpointStatusElement.innerText = 'Checking URL . . .';

        fetch(endpointUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`,
            },
        })
        .then(response => {
            console.log(response)

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const endpointStatus = data.defaultStatus !== undefined ? data.defaultStatus : data.status;
            endpointStatusElement.innerText = `Endpoint status: ${endpointStatus}`;

            if (endpointStatus === 'Running') {
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

                // Show submit button
                submitButton.style.display = 'block';

                // Show submit button
                submitButton.style.display = 'block';

                // Add a clickable text on a new line with the status to prompt user to deprovision the model
                endpointStatusElement.innerHTML = `Endpoint status: ${endpointStatus} - <a href="#" style="color: red;">Deprovision it?</a></span>`;

                // Add a click event listener to the deprovision hyperlink
                const deprovisionLink = endpointStatusElement.querySelector('a');

                // Add a click event listener to the deprovision hyperlink
                deprovisionLink.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Display a confirmation dialog
                    const isConfirmed = confirm('Are you sure you want to deprovision this endpoint?');

                    if (isConfirmed) {
                        // Call the deprovisionVersion function
                        deprovisionVersion(endpointUrl).then((deprovisioned) => {
                            if (deprovisioned) {
                                // Successfully deprovisioned, refresh the form listener
                                handleEndpointInput();
                            }
                        });
                    } else {
                        // User clicked "Cancel" or closed the dialog
                        console.log('Deprovisioning canceled');
                    }
                });

                // Append the deprovision link to the status element
                endpointStatusElement.appendChild(document.createElement('br')); // Add a line break for better spacing
                endpointStatusElement.appendChild(deprovisionLink);
            } else if (endpointStatus === 'Unprovisioned') {
                // Hide submit button
                submitButton.style.display = 'none';

                // Add a clickable text on a new line with the status to prompt user to provision the model
                endpointStatusElement.innerHTML = `Endpoint status: ${endpointStatus} <br><a href="#" style="color: blue;">Provision it?</a></span>`;

                // Add a click event listener to the provision hyperlink
                const provisionLink = endpointStatusElement.querySelector('a');

                // Event listener for the provision link
                provisionLink.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Display a confirmation dialog
                    const isConfirmed = confirm('Are you sure you want to provision this version?');

                    if (isConfirmed) {
                        // Call the provisionVersion function
                        provisionVersion(endpointUrl).then((provisioned) => {
                            if (provisioned) {
                                // Successfully provisioned, refresh the form listener
                                handleEndpointInput();
                            }
                        });
                    } else {
                        // User clicked "Cancel" or closed the dialog
                        console.log('Provisioning canceled');
                    }
                });
            } else {
                // Hide submit button if the endpoint status is not "Running"
                submitButton.style.display = 'none';
            }
        })
        .catch(error => {
            if (error instanceof Error) {
                if (error.message.includes('HTTP error! Status: 401')) {
                    // Handle 401 Unauthorized (token expired) error
                    endpointStatusElement.innerText = 'Access token expired.';
                } else if (error.message.includes('HTTP error! Status: 404')) {
                    // Handle 404 Not Found error
                    endpointStatusElement.innerText = 'Endpoint not found.';
                } else if (error.message.includes('HTTP error! Status: 400')) {
                    // Handle 400 Bad Request error
                    endpointStatusElement.innerText = 'Invalid request.';
                } else {
                    // Default error message for other scenarios
                    endpointStatusElement.innerText = 'An error occurred.';
                }
            } else {
                // Default error message for unexpected errors
                endpointStatusElement.innerText = 'An unexpected error occurred.';
            }

            // Hide submit button if there's an error
            submitButton.style.display = 'none';
        });
    }, 200); // Wait for 1 second after the user stops typing
}

// Attach the event listener to the endpoint input field
document.getElementById('endpointUrl').addEventListener('input', handleEndpointInput);

// Function to handle provisioning
async function provisionVersion(endpointUrl) {
    try {
        // Make a PATCH request to the provisioning URL
        const response = await fetch(endpointUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`,
            },
            // Add any additional data or body if required for provisioning
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Successfully provisioned
        return true;
    } catch (error) {
        console.error('Provisioning Error:', error);
        // Handle error during provisioning, display a message, etc.
        return false;
    }
}

// Add this function to handle deprovisioning
async function deprovisionVersion(endpointUrl) {
    try {
        // Make a DELETE request to the deprovisioning URL
        const response = await fetch(endpointUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`,
            },
            // Add any additional data or body if required for deprovisioning
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Successfully deprovisioned
        return true;
    } catch (error) {
        console.error('Deprovisioning Error:', error);
        // Handle error during deprovisioning, display a message, etc.
        return false;
    }
}

// Function to handle form submission and get prediction
function getPrediction(e) {
    e.preventDefault();

    const endpointUrl = document.getElementById('endpointUrl').value;
    const modelOutput = document.getElementById('output');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const loadingMessage = document.getElementById('loadingMessage');

    // Hide model output and show loading spinner and message
    modelOutput.style.display = 'none';
    loadingSpinner.style.display = 'inline-block';
    loadingMessage.style.display = 'block';

    // Generate array of values based on individual form elements
    const keyValuePairs = document.querySelectorAll('#inputFields .input-group');
    const inputData = [[]]; // Initialize as a list within a list

    keyValuePairs.forEach(pair => {
        const value = pair.querySelector('.form-control').value;
        inputData[0].push(!isNaN(value) ? parseFloat(value) : value);
    });

    console.log(inputData)
    console.log(JSON.stringify({ "inputs": inputData }),)

    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`,
        },
        body: JSON.stringify({ "inputs": inputData }),
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

        console.log(data.predictions[0])
        const firstPrediction = data.predictions[0][0];
        modelOutput.innerText = `Model Output: ${firstPrediction}`;
        modelOutput.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
// Attach the event listener to the form
document.getElementById('mlForm').addEventListener('submit', getPrediction);

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
            <input class="form-control" placeholder="${field.name}" data-type="${field.type}">
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

    // Clear existing output fields
    outputDiv.innerHTML = '';

    const outputList = document.createElement('ul');
    outputList.classList.add('output-list');

    signature.forEach(field => {
        const outputItem = document.createElement('li');
        outputItem.innerHTML = `<strong>${field.name}</strong>: ${field.type}`;
        outputList.appendChild(outputItem);
    });

    outputDiv.appendChild(outputList);

    // Display the output section
    outputDiv.style.display = 'block';
}

// Function to validate the form
function validateForm() {
    const inputs = document.querySelectorAll('#inputFields input.form-control');
    let formValid = true;

    inputs.forEach(inputElement => {
        const dataType = inputElement.getAttribute('data-type');
        const value = inputElement.value.trim(); // Trim leading/trailing whitespaces

        if (dataType === 'double') {
            if (value !== '' && isNaN(value)) {
                inputElement.style.border = '1px solid red';

                // Add warning icon
                inputElement.classList.add('is-invalid');
                formValid = false;
            } else {
                inputElement.style.border = '';

                // Remove warning icon
                inputElement.classList.remove('is-invalid');
            }
        }
    });

    const allFieldsNotEmpty = Array.from(inputs).every(inputElement => inputElement.value.trim() !== '');

    const submitButton = document.querySelector('#mlForm button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = !formValid || !allFieldsNotEmpty;
    }
}