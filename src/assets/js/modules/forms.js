import { closeModal } from './modal';

const forms = () => {
    const form = document.querySelector('.contact-form'),
        inputs = document.querySelectorAll('input');

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    }; 

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');

        Array.from(form.children).forEach(child => {
            child.style.display = 'none';
        });

        form.style.alignItems = 'center';

        statusMessage.innerHTML = `
            <svg>
                <use xlink:href="#ok"></use>
            </svg>
        `;

        form.append(statusMessage);
        statusMessage.classList.add('animate-fade-in');

        const formData = new FormData(form);

        postData('../../server.php', formData)
        .then(res => { 
        })
        .catch((err) => {
        })
        .finally(() => {
            setTimeout(() => {
                closeModal('.modal__overlay');
            }, 1500);
            
            clearInputs();
            setTimeout(() => {
                statusMessage.remove();
                form.style.alignItems = '';
                Array.from(form.children).forEach(child => {
                    child.style.display = 'block';
                });
            }, 3000);
        });
    });
};

export default forms;