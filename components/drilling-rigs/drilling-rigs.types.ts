export interface RigCategory {
  /**
   * Unique ID
   */
  id: string;

  /**
   * Category Title
   */
  title: string;

  /**
   * Short Description
   */
  description: string;

  /**
   * Hero Image
   */
  image: string;

  /**
   * Category URL
   */
  href: string;

  /**
   * Category Badge
   * Example:
   * "Best Seller"
   * "Most Popular"
   * "Heavy Duty"
   */
  badge: string;

  /**
   * Best suited for
   */
  bestFor: string;

  /**
   * Typical drilling depth
   */
  depth: string;

  /**
   * Hole diameter range
   */
  holeDiameter: string;

  /**
   * Supported drilling methods
   */
  methods: string[];

  /**
   * Primary applications
   */
  applications: string[];

  /**
   * Geological formations
   */
  formations: string[];

  /**
   * Models included in this category
   */
  machines: string[];

  /**
   * Number of models
   */
  totalModels: number;
}

export interface FeaturedMachine {
  id: string;

  name: string;

  category: string;

  image: string;

  depth: string;

  application: string;

  href: string;
}