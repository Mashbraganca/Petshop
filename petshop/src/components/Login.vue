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
                    sobrenome: "Snake",
                    image: './profile-placeholder.png',
                    id: "SNAAAAAAAAAAAAAAKE",
                    telefone: "000000000",
                    email: "snake.SNAAAAKE@gmail.com"
                });

                this.$router.push('/admin');
                return;
            }


            if (validLogin) {
                //replace the placeholder JSON with a user info JSON
                this.$emit('login', { 
                    name: "Solid",
                    sobrenome: "Snake",
                    image: './profile-placeholder.png',
                    id: "SNAAAAAAAAAAAAAAKE",
                    endereço: "a box",
                    telefone: "000000000",
                    email: "snake.SNAAAAKE@gmail.com"
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