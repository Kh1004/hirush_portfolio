# Project images

Drop project photos in this folder and reference them from `src/data/site.ts`.

## File specs

- Aspect ratio: **16:10**
- Recommended size: **1600 × 1000 px**
- Format: **WebP** (preferred) or JPG
- Weight: keep each file **under ~200 KB**

## Naming

Use the project `id` from `src/data/site.ts`:

| Project | File |
| --- | --- |
| Treated Waste Water Recovery for Process Use | `treated-waste-water-recovery.webp` |
| RO/DI System (Stats ChipPAC) | `ro-di-system-stats-chippac.webp` |
| Process Cooling Water System | `process-cooling-water-system.webp` |
| Polishing System | `polishing-system.webp` |
| Demineralized Water Treatment Plant | `demineralized-water-treatment-plant.webp` |
| Semakau Electrical Generation & Distribution | `semakau-electrical-generation-distribution.webp` |
| IPU Valves Remote Operation & Monitoring | `remote-operation-monitoring-ipu-valves.webp` |
| Changi Water Reclamation Plant (CWRP) | `upgrading-plant-water-system-cwrp.webp` |
| Bedok Sodium Hypochlorite Dosing | `sodium-hypochlorite-dosing-bedok.webp` |
| Chua Chu Kang Pulsator Vacuum System | `pulsator-vacuum-chua-chu-kang.webp` |
| Swimming Pool Filtration (Electrical) | `swimming-pool-filtration-electrical.webp` |
| Climate Monitoring System (Tengah Air Base) | `climate-monitoring-tengah-air-base.webp` |
| Fuel Injection Calibration System | `fuel-injection-calibration.webp` |
| RO System (Singapore Polytechnic) | `ro-system-singapore-polytechnic.webp` |
| Wave Generation & Sump Pump Control | `wave-generation-sump-pump-control.webp` |
| RO DI & Chemical Transfer System | `ro-di-chemical-transfer.webp` |
| RO System (800 Super) | `ro-system-800-super.webp` |
| Special Gas Filling System | `special-gas-filling-system.webp` |
| Programming Support (OTV VEOLIA) | `programming-support-otv-veolia.webp` |
| BMS System (OMNI Logistics) | `bms-system-omni-logistics.webp` |
| Vertical Injector (LS Marine) | `vertical-injector-ls-marine.webp` |
| RO System (F&N Foods) | `ro-system-fn-foods.webp` |

## Wiring an image

Add the `image` and `imageAlt` fields to that project in `src/data/site.ts`:

```ts
{
  id: 'polishing-system',
  title: 'Polishing System',
  client: 'Stats ChipPAC Pte Ltd',
  role: 'Design and Built',
  capability: 'design',
  image: '/assets/images/projects/polishing-system.webp',
  imageAlt: 'Polishing system control panel installed at Stats ChipPAC',
},
```

Projects without an `image` keep the branded fallback panel (capability icon + gradient), so the grid never shows a broken image.
