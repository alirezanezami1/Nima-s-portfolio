<template>
  <div v-html="soundcloudEmbedCode"></div>
</template>

<script setup>
import { ref } from 'vue'
// این متغیر از دیتابیس شما خوانده می‌شود
const soundcloudEmbedCode = ref(
  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2055508209&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nima-masoumi-566658420" title="nima masoumi" target="_blank" style="color: #cccccc; text-decoration: none;">nima masoumi</a> · <a href="https://soundcloud.com/nima-masoumi-566658420/sets/my-music" title="My music" target="_blank" style="color: #cccccc; text-decoration: none;">My music</a></div>',
)
</script>
