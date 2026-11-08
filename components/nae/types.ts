export interface StatusInfo {
  label: string;
  className: string;
}

export interface ActivityItem {
  code: string;
  label_ar: string;
  label_fr: string;
  status: string;
  statusInfo: StatusInfo;
  sector_code: string;
  group_code?: string;
  subgroup_code?: string;
  tutelle_fr?: string | null;
  type_autorisation_fr?: string | null;
  contenue_fr?: string;
  accessoires_fr?: string | null;
}

export interface Finding {
  id: string;
  severity: "info" | "warning" | "critical";
  title_ar: string;
  title_fr: string;
  detail_ar: string;
  detail_fr: string;
  article?: string;
  sourceUrl?: string;
  codes?: string[];
}

export interface AnalysisResponseData {
  activities: ActivityItem[];
  analysis: {
    selectedCount: number;
    sectors: string[];
    sectorLabels?: string[];
    primaryCode: string | null;
    findings: Finding[];
  };
}
