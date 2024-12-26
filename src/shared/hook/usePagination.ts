import { computed, ref, Ref } from "vue";

export default function usePagination<T>(items: Ref<T[]>, items_per_page: number) {
  // 현재 열린 페이지
  const current_page = ref(1);

  // 최대 페이지 수
  const max_page = computed(() => Math.ceil(items.value.length / items_per_page));

  // 현재 페이지에 표시할 아이템
  const current_items = computed(() => {
    const start = (current_page.value - 1) * items_per_page;
    const end = start + items_per_page;

    return items.value.slice(start, end);
  });

  return { current_page, current_items, max_page };
}
