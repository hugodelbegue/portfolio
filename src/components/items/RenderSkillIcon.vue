<script setup>
import IconVue from '../icons/IconVue.vue'
import IconSass from '../icons/IconSass.vue'
import IconGit from '../icons/IconGit.vue'
import IconHtml from '../icons/IconHtml.vue'
import IconJavascript from '../icons/IconJavascript.vue'
import IconNode from '../icons/IconNode.vue'
import IconSeo from '../icons/IconSeo.vue'
import { h } from 'vue'
</script>

<script>
export default {
    props: {
        icon: String
    },
    render() {
        if (this.icon == 'IconVue') {
            return h(h(IconVue))
        }
        if (this.icon == 'IconSass') {
            return h(h(IconSass))
        }
        if (this.icon == 'IconGit') {
            return h(h(IconGit))
        }
        if (this.icon == 'IconHtml') {
            return h(h(IconHtml))
        }
        if (this.icon == 'IconJavascript') {
            return h(h(IconJavascript))
        }
        if (this.icon == 'IconSeo') {
            return h(h(IconSeo))
        }
        if (this.icon == 'IconNode') {
            return h(h(IconNode))
        }
    }
}
</script>