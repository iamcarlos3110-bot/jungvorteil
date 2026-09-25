// services/sources/ManualSource.ts
// Manual source: offers entered via admin panel
import { SourceAdapter, RawOffer } from "./SourceAdapter";

export class ManualSource implements SourceAdapter {
  name = "Manual";
  type = "manual" as const;

  async fetchOffers(): Promise<RawOffer[]> {
    // Manual offers are entered directly in the DB via admin
    // This adapter exists for interface compliance
    return [];
  }
}

// services/sources/CSVSource.ts
// CSV source adapter (future use)
export class CSVSource implements SourceAdapter {
  name: string;
  type = "csv" as const;
  private csvUrl: string;

  constructor(name: string, csvUrl: string) {
    this.name = name;
    this.csvUrl = csvUrl;
  }

  async fetchOffers(): Promise<RawOffer[]> {
    // TODO: Implement CSV parsing
    // 1. Fetch CSV from this.csvUrl
    // 2. Parse with a CSV parser
    // 3. Map columns to RawOffer fields
    // 4. Return array of RawOffer
    console.log(`CSVSource: Would fetch from ${this.csvUrl}`);
    return [];
  }
}

// services/sources/JSONSource.ts
// JSON source adapter (future use)
export class JSONSource implements SourceAdapter {
  name: string;
  type = "json" as const;
  private jsonUrl: string;

  constructor(name: string, jsonUrl: string) {
    this.name = name;
    this.jsonUrl = jsonUrl;
  }

  async fetchOffers(): Promise<RawOffer[]> {
    // TODO: Implement JSON fetching and mapping
    console.log(`JSONSource: Would fetch from ${this.jsonUrl}`);
    return [];
  }
}
