import type { DesignFlowConfig } from "designflow"

const config: DesignFlowConfig = {
  name: "My Designflow Project",
  divkitDir: "/app/divkit_jsons",
  divkitClientPath: "/app/divkit_client",
  screens: {},

  divkitScreens: {
    // Row 0 — Entry & Discovery
    "divkit_food_court_location_search": {
      position: { x: -550, y: 0 },
    },
    "divkit_food_court_landing_screen": {
      position: { x: 0, y: 0 },
      viewport: "mobile",
      color: "#ff80ff",
    },
    "divkit_food_court_search": {
      position: { x: 550, y: 0 },
    },
    "divkit_food_court_filter_screen": {
      position: { x: 1100, y: 0 },
    },
    // Row 1 — Vendor Browsing
    "divkit_food_court_vendor_detail": {
      position: { x: -275, y: 650 },
      viewport: "desktop",
    },
    "divkit_food_court_vendor_products": {
      position: { x: 275, y: 650 },
    },
    "divkit_food_court_product_detail": {
      position: { x: 825, y: 650 },
    },
    // Row 2 — Purchase Flow
    "divkit_food_court_instructions_sheet": {
      position: { x: -550, y: 1300 },
    },
    "divkit_food_court_cart_screen": {
      position: { x: 0, y: 1300 },
    },
    "divkit_food_court_checkout": {
      position: { x: 550, y: 1300 },
    },
    "divkit_food_court_order_preview": {
      position: { x: 1100, y: 1300 },
    },
    "divkit_food_court_thanks": {
      position: { x: 1650, y: 1300 },
    },
    // Row 3 — Categories
    "divkit_food_court_category_listing": {
      position: { x: -275, y: 1950 },
    },
    "divkit_food_court_sub_category_listing": {
      position: { x: 275, y: 1950 },
    },
    "divkit_food_court_category_product_listing": {
      position: { x: 825, y: 1950 },
    },
    "divkit_food_court_offered": {
      position: { x: 1375, y: 1950 },
    },
    // Row 4 — Account & Orders
    "divkit_food_court_store_timings": {
      position: { x: -550, y: 2600 },
    },
    "divkit_food_court_order_listing": {
      position: { x: 0, y: 2600 },
    },
    "divkit_food_court_order_detail": {
      position: { x: 550, y: 2600 },
    },
    "divkit_food_court_my_account": {
      position: { x: 1100, y: 2600 },
    },
    "divkit_food_court_favourite_vendors": {
      position: { x: 1650, y: 2600 },
    },
  },

  edges: [
    { from: "divkit_food_court_landing_screen", to: "divkit_food_court_search", label: "Search" },
    { from: "divkit_food_court_landing_screen", to: "divkit_food_court_filter_screen", label: "Filter" },
    { from: "divkit_food_court_landing_screen", to: "divkit_food_court_location_search", label: "Location" },
    { from: "divkit_food_court_landing_screen", to: "divkit_food_court_vendor_detail", label: "Vendor" },
    { from: "divkit_food_court_cart_screen", to: "divkit_food_court_checkout", label: "Checkout" },
    { from: "divkit_food_court_checkout", to: "divkit_food_court_order_preview", label: "Preview Order" },
    { from: "divkit_food_court_order_preview", to: "divkit_food_court_thanks", label: "Place Order" },
    { from: "divkit_food_court_vendor_detail", to: "divkit_food_court_vendor_products", label: "View Products" },
    { from: "divkit_food_court_vendor_products", to: "divkit_food_court_product_detail", label: "Product Detail" },
    { from: "divkit_food_court_product_detail", to: "divkit_food_court_cart_screen", label: "Add to Cart" },
    { from: "divkit_food_court_cart_screen", to: "divkit_food_court_instructions_sheet", label: "Instructions" },
  ],
}

export default config
