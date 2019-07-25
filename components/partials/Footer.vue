<template lang="pug">
#footer
    v-container
        v-layout.py-4.wrap
            v-flex.xs12.sm12.md4.text-xs-center
                a(href="https://www.pycon.jp/" target="_blank")
                    img(src="@/assets/images/pyconjp_logo.png" width="200px")
            v-flex.xs12.sm12.md8
                .title.py-2 主催: 一般社団法人PyCon JP
                .subheading.py-2
                    span PyCon JP 2019 in Tokyo is a production of the 
                    a(href="https://www.pycon.jp/" target="_blank") PyCon JP Committee
                .subheading.py-2(
                    :class="{'text-xs-center': $vuetify.breakpoint.smAndDown}"
                )
                    span
                        a(href="https://twitter.com/PyConJ" target="_blank")
                            v-icon(color="twitter") fab fa-twitter
                        a(href="https://www.facebook.com/PyConJP" target="_blank")
                            v-icon(color="facebook").ml-2 fab fa-facebook

</template>

<script>
export default {
    name: "pycon-footer"
}
</script>

