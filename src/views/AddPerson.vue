<template>
    <v-app>
        <v-app-bar app style="z-index: 10010">
            <span @click="goBack"><v-icon>fas fa-arrow-left</v-icon></span>
        </v-app-bar>
        <v-content>
      <v-container
        fluid
        style="display: flex; flex-direction: column; align-items: center"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
              <v-card width="384" style="padding: 26px; margin: 0 auto;">
                <picture-input
                width="330"
                height="330"
                ref="pictureInput"
                :removable="true"
                :hideChangeButton="true"
                removeButtonClass="remove"
                :changeOnClick="true"
                :crop="false"
                :customStrings="optinons"
                @change="onChange"></picture-input>
                <div class="name">
                    <v-text-field
                outlined
                v-model="name"
                label="Введите имя"
                :clearable= true
                ></v-text-field>
                <v-text-field
                outlined
                label="Введите фамилию"
                :clearable= true
                v-model="lastname"
                ></v-text-field>
                </div>
              </v-card>
              <h2 class="bio">Биография</h2>
              <div class="inform">
                  <h2 style="margin-top: 20px;">Год рождения:</h2>
                 <v-text-field
                 v-model="Born"
                outlined
                :clearable= true
                ></v-text-field>
                <h2 style="margin-top: 20px;">Год смерти:</h2>
             <v-text-field
                v-model="Death"
                outlined
                :clearable= true
                ></v-text-field>
            <h2 style="margin-top: 20px;">Биография</h2>
            <v-textarea
            outlined
            name="input-7-4"
            label="Биография"
            v-model="bio"
        ></v-textarea>
                <v-btn color="#813ce3" @click="Send()">Отправить</v-btn>
              </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    </v-app>
</template>

<script>
import PictureInput from 'vue-picture-input'
import { mapActions } from 'vuex'
export default {
  data: () => ({
    optinons: {
      drag: 'Нажмите чтобы выбрать фото',
      remove: 'Удалить фото'
    },
    picture: [],
    name: '',
    lastname: '',
    Born: '123',
    Death: '123',
    bio: ''
  }),

  components: {
    PictureInput
  },

  methods: {
    goBack () {
      this.$router.push({
        name: 'Home'
      })
    },

    onChange () {
      this.picture = this.$refs.pictureInput.file
    },

    onChanges ({ coordinates, canvas }) {
      this.coordinates = coordinates
      // You able to do different manipulations at a canvas
      // but there we just get a cropped image
      this.image = canvas.toDataURL()
      console.log(this.image)
    },
    ...mapActions(['Send_Person']),

    Send () {
      const tmp = new URLSearchParams(window.location.search).get('vk_user_id')
      const data = {
        vkUserId: tmp,
        name: this.name,
        surname: this.lastname,
        birthYear: Number(this.Born),
        deathYear: Number(this.Death),
        bio: this.bio,
        filename: this.picture
      }
      this.$store.dispatch('Send_Person', data)
    }
  },

  mounted () {

  }
}
</script>

<style scoped>
    .remove{
      border: 1px solid black;
    }

    .name{
        margin-top: 40px;
    }

    .bio{
        display: block;
        width: 60%;
        text-align: center;
        margin: 0 auto;
        border-bottom: 1px solid #d8d8d8;
        padding-bottom: 20px;
        margin-top: 30px;
    }

    .inform{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 425px;
        margin: 0 auto;
        padding-top: 20px;
    }
</style>
