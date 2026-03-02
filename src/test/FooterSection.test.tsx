import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FooterSection from "../components/FooterSection"; // Updated relative path
import { I18nProvider } from "../lib/i18n"; // Updated relative path

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    span: (props: any) => <span {...props} />,
    h2: (props: any) => <h2 {...props} />,
    p: (props: any) => <p {...props} />,
    a: (props: any) => <a {...props} />,
    nav: (props: any) => <nav {...props} />,
  },
}));

describe("FooterSection", () => {
  it("renders social media icons with updated styling", () => {
    render(
      <I18nProvider>
        <FooterSection />
      </I18nProvider>
    );

    // Get the social media navigation
    const nav = screen.getByLabelText("Social media");
    expect(nav).toBeInTheDocument();

    // Main Socials (Instagram, X, Facebook) - Should be circular and white styling
    const mainLabels = ["Instagram", "X", "Facebook"];
    mainLabels.forEach(label => {
      const link = screen.getByLabelText(label);
      expect(link).toBeInTheDocument();
      
      // Verify the classes that make it circular and prominent (white styling)
      expect(link).toHaveClass("flex");
      expect(link).toHaveClass("items-center");
      expect(link).toHaveClass("justify-center");
      expect(link).toHaveClass("rounded-full");
      expect(link).toHaveClass("border");
      expect(link).toHaveClass("border-white/20");
      expect(link).toHaveClass("bg-white/5");
      
      expect(link).toHaveClass("w-12");
      expect(link).toHaveClass("h-12");
    });

    // Secondary Socials (IMDb, Letterboxd) - Should be logo image
    const secondaryLabels = ["IMDb", "Letterboxd"];
    secondaryLabels.forEach(label => {
      const link = screen.getByLabelText(label);
      expect(link).toBeInTheDocument();
      
      // Should NOT have circular styling
      expect(link).not.toHaveClass("rounded-full");
      expect(link).not.toHaveClass("border-white/20");
      expect(link).not.toHaveClass("bg-white/5");

      // Should contain an image with alt text
      const img = screen.getByAltText(label);
      expect(img).toBeInTheDocument();
      expect(link).toContainElement(img);
    });
  });
});
