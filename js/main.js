const app = new Vue({
    el: '#app',
    mounted(){
        console.log(this.contacts[this.activeuser].messages)
        console.log(this.contacts[this.activeuser].messages[this.contacts[this.activeuser].messages.length - 1].message);
    },
        data:{
            user: {
                name: '',
                avatar: 'img', 
            },
            contacts: [
                {
                    name: 'Mamma',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
               
            ],
            activeuser: 0,
            newmessage: '',
        },

        methods: {
            getlastmessage(index){
                let lastmessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
                /*tronco il mex se superiore a 30 caratteri*/
                if(lastmessage.length > 30){
                    lastmessage = lastmessage.substr(0,30)+"...";
                }
                return lastmessage;
            },

            getdate(index){
                let date = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
                return date;
            },

            sendmessage(){
                /*l'imput è da troncare negli spazi altrimenti si possono mandare spazi vuoti*/
                if(this.messagetosent != ''){
                    const newmessage = {
                        date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message:this.messagetosent,
                        status: 'sent',
                    };
                    console.log(newmessage);
                    this.contacts[this.activeuser].messages.push(newmessage);
                    this.messagetosent = '';
                    /*risposta automatica*/
                    setTimeout(() =>{
                        this.contacts[this.activeuser].messages.push ({
                            date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            message: 'ciao',
                            status: 'received',
                        });
                    },3000)
                }
            },
        }
})