document.addEventListener('DOMContentLoaded', () => {
    // Fecha objetivo: 1 de Septiembre de 2028 a las 00:00 hrs
    const targetDate = new Date('2028-10-01T00:00:00');
    
    const elements = {
        months: document.getElementById('months'),
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    function padZero(num) {
        return num.toString().padStart(2, '0');
    }

    function updateCountdown() {
        const now = new Date();
        
        if (now >= targetDate) {
            Object.values(elements).forEach(el => el.textContent = '00');
            return;
        }

        let months = 0;
        let temp = new Date(now);

        // Calculate exact calendar months remaining
        while (true) {
            let next = new Date(temp);
            next.setMonth(next.getMonth() + 1);
            if (next <= targetDate) {
                months++;
                temp = next;
            } else {
                break;
            }
        }

        // Remaining time after subtracting the exact months
        const remainingTime = targetDate - temp;
        
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        elements.months.textContent = padZero(months);
        elements.days.textContent = padZero(days);
        elements.hours.textContent = padZero(hours);
        elements.minutes.textContent = padZero(minutes);
        elements.seconds.textContent = padZero(seconds);
    }

    // Initial call
    updateCountdown();
    // Update every second
    setInterval(updateCountdown, 1000);
});
