<template>
    <v-dialog v-model="popup" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn text color="blue" v-on="on">Add Pet</v-btn>
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
                                <v-text-field label="Name*" required></v-text-field>
                                <v-text-field label="Race*" required></v-text-field>
                                <v-text-field label="ID*" required></v-text-field>
                                <v-text-field label="Age"></v-text-field>
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

                                    <v-btn color="blue" text> Upload Image</v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text @click="popup = false">Cancel</v-btn>
                <v-btn color="blue" text @click="popup = false">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
      photo: './pet-placeholder.png'
    };
  },
};
</script>