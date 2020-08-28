<style src="./Info.scss" scoped lang="scss"></style>
<script src="./Info.js"></script>

<template>
  <div class="user-list" :style="{background: userListColor.userList.bg}">
    <table style="padding-top: 5px;">
      <tbody>
        <tr v-for="user in participants" :key="user.id">
          <td style="text-align: center;">
            <img :src="user.imageUrl" class="img-msg" />
          </td>
          <td class="user-element" :style="{color: userListColor.userList.text}">
            {{ user.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
