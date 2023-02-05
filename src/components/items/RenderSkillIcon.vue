<script setup>
import IconVue from '@/components/icons/IconVue.vue'
import IconSass from '@/components/icons/IconSass.vue'
import IconGit from '@/components/icons/IconGit.vue'
import IconHtml from '@/components/icons/IconHtml.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
import IconNode from '@/components/icons/IconNode.vue'
import IconSeo from '@/components/icons/IconSeo.vue'
import { h } from 'vue'
</script>

<script>
export default {
    props: {
        icon: String
    },
    render() {
        const IconComponent = {
            IconVue,
            IconSass,
            IconGit,
            IconHtml,
            IconJavascript,
            IconSeo,
            IconNode
        }[this.icon];

        if (IconComponent) {
            return h(IconComponent);
        }
    }
}
</script>