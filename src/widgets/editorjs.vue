<template>
  <div class="editorjs" ref="editor_container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import EditorJS from "@editorjs/editorjs";

const editor_container = ref(null);

const props = defineProps(["modelValue", "placeholder"]);
const emit = defineEmits(["update"]);

let editor;
let updating_model = false;

function modelToView() {
  const parsed = JSON.parse(props.modelValue || "{}");

  if (!!props.modelValue && !!editor.render) {
    editor.render(parsed);
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
    tools: {},
    minHeight: "auto",
    data: JSON.parse(props.modelValue || "{}"),
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
