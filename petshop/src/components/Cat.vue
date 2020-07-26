<template>
    <v-dialog v-model="popup" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn text color="blue" v-on="on">
                <v-icon>mdi-plus-thick</v-icon>
                <span> Adicionar</span>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h1>Adicionar Categoria </h1>
            </v-card-title>

            <v-card-text>
                <v-form v-model="valid">
                    <v-text-field label="Nome*" v-model="name" :rules="nameRules" required></v-text-field>
                </v-form>
                
            </v-card-text>
        
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text @click="popup = false">Cancelar</v-btn>
                <v-btn color="blue" text @click="submit">Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            popup: false,
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Requer nome',
                v => v.length <= 30 || 'Nome tem que ter menos que 30 caracteres',
            ],
        };
    },

    methods: {
        submit(){
            if (this.valid){
                this.$emit('add', this.name);
                this.popup = false;
            }
        }
    }
};
</script>