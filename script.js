document.addEventListener('DOMContentLoaded', function() {
    
    // 初始化问候语
    const chatBody = document.getElementById('chatBody');
    if(chatBody) {
        // 创建欢迎消息
        const greeting = document.createElement('div');
        greeting.classList.add('message', 'bot-message');
        // 这里是你要求的指定问候语
        greeting.innerText = "Hi! I'm an AI agent trained for Edith. How can I help?";
        chatBody.appendChild(greeting);
    }

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 50;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // AI Logic
    window.toggleChat = function() {
        const chatWindow = document.getElementById('chatWindow');
        chatWindow.classList.toggle('open');
    }

    window.askBot = function(topic) {
        const chatBody = document.getElementById('chatBody');
        
        let userText = "";
        if(topic === 'experience') userText = "Tell me about Edith's experience.";
        if(topic === 'skills') userText = "What are her tech skills?";
        if(topic === 'contact') userText = "How can I contact her?";
        
        const userDiv = document.createElement('div');
        userDiv.classList.add('message', 'user-message');
        userDiv.innerText = userText;
        chatBody.appendChild(userDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        setTimeout(() => {
            let botResponse = "";
            
            if(topic === 'experience') {
                botResponse = "Edith has 10+ years of experience. Most recently at Citi (FinTech Governance) managing a $65M portfolio, and previously as a Controller at Amica ($100M+ Real Estate).";
            } else if (topic === 'skills') {
                botResponse = "She is proficient in Python, SQL, and Power BI for data. For systems, she specializes in Yardi, NetSuite, and Oracle Cloud. Plus, she holds CPA, PMP, and Azure certifications.";
            } else if (topic === 'contact') {
                botResponse = "You can schedule a coffee chat directly via the Calendly link below, or connect with her on LinkedIn!";
            }

            const botDiv = document.createElement('div');
            botDiv.classList.add('message', 'bot-message');
            botDiv.innerText = botResponse;
            chatBody.appendChild(botDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 600);
    }
});
