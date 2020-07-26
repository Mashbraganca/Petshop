<template>
    <v-dialog v-model="popup" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <div>
                <v-btn v-if="pet === null" text color="blue" v-on="on">
                    <v-icon>mdi-plus-thick</v-icon>
                    <span> Add Pet</span>
                </v-btn>
                <div v-else>
                    <v-btn icon color="blue" v-on="on">
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>

                    <v-btn icon color="red" @click="deletePet">
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </div>
            </div>
        </template>
        <v-card>
            <v-card-title>
                <h1>Register New Pet</h1>
            </v-card-title>

            <v-container>
                <v-layout row wrap>
                    <v-flex md6>
                        <v-card flat class="text-center ma-3">
                            <v-card-text>
                                <v-text-field label="Name*" v-model="name" required></v-text-field>
                                <v-text-field label="Race*" v-model="race" required></v-text-field>
                                <v-text-field label="Age" v-model="age"></v-text-field>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md6>
                        <v-card flat class="text-center ma-3">

                            <v-card-text>
                                <div class="text-center">
                                    <v-avatar left size=200px>
                                        <img :src=photo alt="Profile Picture">
                                    </v-avatar>

                                    <v-btn color="blue" text @click="uploadPhoto"> Upload Image</v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text @click="popup = false">Cancel</v-btn>
                <v-btn color="blue" text @click="submit">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: [ 'user', 'pet' ],
    data() {
        return {
            popup: false,
            name: '',
            race: '',
            age: '',
            photo: './pet-placeholder.png',
        };
    },

    methods: {
        uploadPhoto(){
            //load photo and store on database
            console.log("Photo Uploaded");
        },

        submit(){
            let data = {
                name: this.name,
                race: this.race,
                id: this.id,
                age: this.age,
                photo: this.photo
            }

            if (this.pet === null){
                this.addPet(data);
            } else {
                this.updatePet(data);
            }
        },

        addPet(data){
            let id = this.user.id;
            
            //criar um pet novo
            let valid = true;
            console.log("Add pet on user " + id);
            console.log(data);

            if (valid){
                this.popup = false;
                //dar um get user para atualizar os dados
                let user = this.user;
                this.$emit('update-pet', user);
            } else {
                alert("Informações inválidas");
            }
        },

        updatePet(data){
            let id = this.user.id;

            //editar pet referenciado
            let valid = true;
            console.log("Update pet " + this.pet.id + " of user " + id);
            console.log(data);

            if (valid){
                this.popup = false;
                //dar um get user para atualizar os dados
                let user = this.user;
                this.$emit('update-pet', user);
            } else {
                alert("Informações inválidas");
            }
        },

        deletePet(){
            //deletar pet referenciado
            let id = this.user.id;
            console.log("Delete pet " + this.pet.id + " of user " + id);
            //dar um get user para atualizar os dados
            let user = this.user;

            this.$emit('update-pet', user);
        }
    }
};
</script>