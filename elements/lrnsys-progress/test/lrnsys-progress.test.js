import { fixture, expect, html } from "@open-wc/testing";

import "../lrnsys-progress.js";

describe("lrnsys-progress test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`
        <lrnsys-progress
          sound=""
          sound-finish=""
          title="The steps to complete this lesson"
          id="progress"
          progressive-unlock=""
          size="large"
        ></lrnsys-progress>
      `
    );
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

/*
describe("A11y/chai axe tests", () => {
  it("lrnsys-progress passes accessibility test", async () => {
    const el = await fixture(html` <lrnsys-progress></lrnsys-progress> `);
    await expect(el).to.be.accessible();
  });
  it("lrnsys-progress passes accessibility negation", async () => {
    const el = await fixture(
      html`<lrnsys-progress
        aria-labelledby="lrnsys-progress"
      ></lrnsys-progress>`
    );
    await assert.isNotAccessible(el);
  });
});

/*
// Custom properties test
describe("Custom Property Test", () => {
  it("lrnsys-progress can instantiate a element with custom properties", async () => {
    const el = await fixture(html`<lrnsys-progress .foo=${'bar'}></lrnsys-progress>`);
    expect(el.foo).to.equal('bar');
  })
})
*/

/*
// Test if element is mobile responsive
describe('Test Mobile Responsiveness', () => {
    before(async () => {z   
      await setViewport({width: 375, height: 750});
    })
    it('sizes down to 360px', async () => {
      const el = await fixture(html`<lrnsys-progress ></lrnsys-progress>`);
      const width = getComputedStyle(el).width;
      expect(width).to.equal('360px');
    })
}) */

/*
// Test if element sizes up for desktop behavior
describe('Test Desktop Responsiveness', () => {
    before(async () => {
      await setViewport({width: 1000, height: 1000});
    })
    it('sizes up to 410px', async () => {
      const el = await fixture(html`<lrnsys-progress></lrnsys-progress>`);
      const width = getComputedStyle(el).width;
      expect(width).to.equal('410px');
    })
    it('hides mobile menu', async () => {
      const el await fixture(html`<lrnsys-progress></lrnsys-progress>`);
      const hidden = el.getAttribute('hidden');
      expect(hidden).to.equal(true);
    })
}) */
