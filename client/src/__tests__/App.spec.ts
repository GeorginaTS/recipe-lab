import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import App from '../App.vue';

describe('App', () => {
  it('renderitza correctament', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/recipe', component: { template: '<div>Recipe</div>' } }
      ]
    });

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    });

    expect(wrapper.find('#app').exists()).toBe(true);
  });

  it('conté el RouterView', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: []
    });

    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          RouterView: true
        }
      }
    });

    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
  });
});
