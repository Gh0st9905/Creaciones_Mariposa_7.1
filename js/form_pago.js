'use strict';

// --- MANEJO DE VISTAS (ENRUTAMIENTO) ---
const catalogView = document.getElementById('catalog-view');
const checkoutView = document.getElementById('checkout-view');
const mainHeader = document.getElementById('main-header');
const paymentForm = document.getElementById('payment-form');
const successScreen = document.getElementById('success-screen');

const summaryTitle = document.getElementById('summary-title');
const summaryPrice = document.getElementById('summary-price');

// Escuchar clics en los botones de compra
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', (e) => {
        const title = e.target.getAttribute('data-title');
        const price = e.target.getAttribute('data-price');
               
        // Cargar datos en el resumen de compra
        summaryTitle.textContent = title;
        summaryPrice.textContent = `$${price}`;
                
        // Alternar vistas
        catalogView.style.display = 'none';
        mainHeader.style.display = 'none';
        checkoutView.style.display = 'block';
                
        // Resetear formulario por si acaso
        paymentForm.reset();
        paymentForm.style.display = 'block';
        successScreen.style.display = 'none';
        clearAllFeedback();
        });
});

// Botón volver
document.getElementById('btn-back').addEventListener('click', () => {
    checkoutView.style.display = 'none';
    catalogView.style.display = 'grid';
    mainHeader.style.display = 'block';
});

document.getElementById('btn-success-close').addEventListener('click', () => {
    checkoutView.style.display = 'none';
    catalogView.style.display = 'grid';
    mainHeader.style.display = 'block';
});

// --- VALIDACIÓN Y RETROALIMENTACIÓN EN TIEMPO REAL ---
const fields = {
    name: {
        input: document.getElementById('cardholder-name'),
        feedback: document.getElementById('name-feedback'),
        validate: (val) => {
            if (val.trim().length < 4) return 'El nombre debe ser más largo.';
            if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(val)) return 'Solo se permiten letras y espacios.';
            return '';
            }
        },
        card: {
            input: document.getElementById('card-number'),
            feedback: document.getElementById('card-feedback'),
            validate: (val) => {
                const cleanVal = val.replace(/\s/g, '');
                if (!/^\d+$/.test(cleanVal)) return 'Solo se permiten números.';
                if (cleanVal.length !== 16) return 'La tarjeta debe tener 16 dígitos.';
                return '';
            },
            format: (val) => {
                // Formatea agregando espacios cada 4 dígitos
                return val.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
            }
        },
        expiry: {
            input: document.getElementById('card-expiry'),
            feedback: document.getElementById('expiry-feedback'),
            validate: (val) => {
                if (!/^\d{2}\/\d{2}$/.test(val)) return 'Formato inválido (MM/AA).';
                const [month, year] = val.split('/').map(Number);
                if (month < 1 || month > 12) return 'Mes inválido.';
                    
                const now = new Date();
                const currentYear = now.getFullYear() % 100; // últimos 2 dígitos
                const currentMonth = now.getMonth() + 1;
                    
                if (year < currentYear || (year === currentYear && month < currentMonth)) {
                    return 'La tarjeta está vencida.';
                }
                return '';
            },
            format: (val) => {
                // Autocompleta la barra diagonal del formato MM/AA
                let clean = val.replace(/\D/g, '');
                if (clean.length > 2) {
                    return clean.substring(0, 2) + '/' + clean.substring(2, 4);
                }
                return clean;
            }
        },
        cvc: {
            input: document.getElementById('card-cvc'),
            feedback: document.getElementById('cvc-feedback'),
            validate: (val) => {
                if (!/^\d{3,4}$/.test(val)) return 'Debe tener 3 o 4 dígitos.';
                return '';
            }
        }
    };

    // Asignar los eventos de tiempo real (input) a cada campo
    Object.keys(fields).forEach(key => {
        const field = fields[key];
           
        field.input.addEventListener('input', (e) => {
            // Aplicar formato si el campo lo requiere
            if (field.format) {
                const selectionStart = e.target.selectionStart;
                e.target.value = field.format(e.target.value);
            }

            // Validar dinámicamente
            const errorMessage = field.validate(e.target.value);
            if (e.target.value === '') {
                // Si está vacío, quitamos estilos pero no ponemos error hasta el submit
                setFeedback(field, '', 'neutral');
            } else if (errorMessage) {
                setFeedback(field, errorMessage, 'error');
            } else {
                setFeedback(field, '✓ Válido', 'success');
            }
        });
    });

    function setFeedback(field, message, status) {
        field.feedback.textContent = message;
        field.feedback.className = 'feedback ' + (status === 'neutral' ? '' : status);
            
        if (status === 'error') {
            field.input.classList.add('invalid');
            field.input.classList.remove('valid');
        } else if (status === 'success') {
            field.input.classList.remove('invalid');
            field.input.classList.add('valid');
        } else {
            field.input.classList.remove('invalid', 'valid');
        }
    }

    function clearAllFeedback() {
        Object.keys(fields).forEach(key => {
            setFeedback(fields[key], '', 'neutral');
        });
    }

    // --- SUBMIT DEL FORMULARIO ---
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        // Validar todos los campos antes de procesar
        Object.keys(fields).forEach(key => {
            const field = fields[key];
            const errorMessage = field.validate(field.input.value);
                
            if (field.input.value.trim() === '') {
                setFeedback(field, 'Este campo es obligatorio.', 'error');
                isFormValid = false;
            } else if (errorMessage) {
                setFeedback(field, errorMessage, 'error');
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Simulación de carga/procesamiento de pago
            const btnSubmit = document.getElementById('btn-submit');
            btnSubmit.textContent = 'Procesando Pago...';
            btnSubmit.disabled = true;

            setTimeout(() => {
                // Ocultar formulario e indicar éxito
                paymentForm.style.display = 'none';
                successScreen.style.display = 'block';
                btnSubmit.textContent = 'Confirmar Pago Seguro';
                btnSubmit.disabled = false;
            }, 1500);
        }
});