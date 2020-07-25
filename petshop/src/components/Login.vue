<template>
    <v-dialog v-model="popup" persistent max-width="400px">
        <v-card>
            <v-card-title>
                <h1>Login</h1>
            </v-card-title>

            <v-card-text>
                <v-text-field label="Username" v-model="username" required></v-text-field>
                <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text @click="cancelLogin()">Cancel</v-btn>
                <v-btn color="blue" text @click="checkLogin()">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: [ 'popup' ],
    data() {
        return {
            username: '',
            password: ''
        }
    },


    methods: {
        checkLogin() {
            //load and validate login information here
            let validLogin = true;

            //check admin entry
            if (this.username == "admin" && this.password == "admin"){
                this.$emit('login', {
                    name: "Solid",
                    lastName: "Snake",
                    photo: './profile-placeholder.png',
                    id: "SNAAAAAAAAAAAAAAKE",
                    phone: "000000000",
                    email: "snake.SNAAAAKE@gmail.com"
                });

                this.$router.push('/admin');
                return;
            }


            if (validLogin) {
                //replace the placeholder JSON with a user info JSON
                this.$emit('login', { 
                    name: "Solid",
                    lastName: "Snake",
                    photo: './profile-placeholder.png',
                    id: "SNAAAAAAAAAAAAAAKE",
                    address: "a box",
                    phone: "000000000",
                    email: "snake.SNAAAAKE@gmail.com",

                    pets: [
                        {name: 'Pet1', id: 'noossaa1', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
                        {name: 'Pet2', id: 'noossaa2', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
                        {name: 'Pet3', id: 'noossaa3', photo: './pet-placeholder.png', race: 'Celeste', age: 42}
                    ]
                });
            } else {
                alert("Username ou senha inválidos");
            }
        },

        cancelLogin(){
            this.$emit('cancel');
        }
    }
};
</script>