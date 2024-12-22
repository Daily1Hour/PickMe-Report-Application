<template>
  <div class="editorjs" ref="editor_container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import EditorJS from "@editorjs/editorjs";
import ListTool from "@editorjs/list";
import EmbedTool from "@editorjs/embed";

const editor_container = ref(null);

const props = defineProps(["modelValue", "placeholder"]);
const emit = defineEmits(["update"]);

let editor;
let updating_model = false;

function modelToView() {
  try {
    const parsed = JSON.parse(props.modelValue || "{}");

    if (!!props.modelValue && !!editor.render) {
      editor.render(parsed);
    }
  } catch (e) {
    if (!!editor.blocks) {
      editor.blocks.renderFromHTML(props.modelValue);
    }
  }
}

function viewToModel(api, event) {
  updating_model = true;

  editor
    .save()
    .then((data) => emit("update", data))
    .catch((error) => {
      console.log(event, "Saving failed: ", error);
    })
    .finally(() => {
      updating_model = false;
    });
}

onMounted(() => {
  editor = new EditorJS({
    holder: editor_container.value,
    placeholder: props.placeholder,
    inlineToolbar: ["bold", "italic", "link"],
    tools: {
      list: ListTool,
      embed: EmbedTool,
    },
    minHeight: "auto",
    data: () => modelToView(),
    onReady: modelToView,
    onChange: viewToModel,
  });
});

watch(
  () => props.modelValue,
  () => {
    if (!updating_model) {
      modelToView();
    }
  },
);

onUnmounted(() => {
  //editor.destroy();
});
</script>

<style scoped>
::v-deep(.ce-block__content) {
  margin: 0;
}
::v-deep(.ce-toolbar) {
  right: auto;
}
</style>
