<script>
    import {onMount} from "svelte";
    import { balancer } from "svelte-action-balancer";

    export let data;


    // Completely Copied and pasted from scottspence official blog GitHub
    let headingNodeList;
    let headings;
    const getHeadings = async () => {
        await headings
    };
    onMount(() => {
        headingNodeList = document.querySelectorAll('h2');
        headings = Array.from(headingNodeList).map((h2, index) => {
            headingNodeList[index].id = `h2-${index + 1}`; // it's original
            return {
                label: h2.innerText,
                href: `#${h2.id}`,
            }
        })
        console.log(headings)
    })
    // till here
</script>


<section class="py-6 sm:py-8 lg:py-10">
    <div class="px-2 mx-auto sm:px-3 lg:px-4">
        <div class="max-w-2xl mx-auto text-center">
            <h2 use:balancer={{ enabled: true, ratio: .4 }} class="text-3xl font-bold text-gray-900 sm:text-4xl">{data.post.title}</h2>
            <img class="object-cover w-full h-full" src="{data.post.cover_image}" alt="" />
        </div>

        <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-1 lg:grid-cols-4 sm:mt-8">
            <div></div>
            <article class="prose col-span-2 daisy-prose">
                {@html data.post.body_html}
            </article>
            <div></div>
        </div>
    </div>
</section>
