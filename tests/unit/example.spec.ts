import { shallowMount } from "@vue/test-utils";
import MyButton from "@/components/MyButton.vue";

describe("MyButton.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Click meClick count 0";
    const wrapper = shallowMount(MyButton);
    expect(wrapper.text()).toMatch(msg);
  });
});
