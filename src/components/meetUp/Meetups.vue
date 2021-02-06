<template>
<v-container>
    <v-row wrap>
        <v-col xs="12" md="8" sm="10" offset-sm="1" offset-md="2">
            <v-card class="green accent-3">
                <v-container fluid>
                    <v-row>
                        <v-col xs="5" md="3" sm="4">
                            <v-img src="siu.jpg" height="130px"></v-img>
                        </v-col>
                        <v-col xs="5" md="7" sm="9">
                            <v-card-title>Meet up in SIU</v-card-title>
                            <v-card-subtitle>On 08 Feb 2021</v-card-subtitle>
                            <v-card-actions>
                                <v-btn depressed class="green accent-3" small to="/meetups/1">
                                    <v-icon left>arrow_forward</v-icon>
                                    <span>View Meetup</span>
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
