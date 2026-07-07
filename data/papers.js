// 논문 데이터베이스 — GitHub Actions가 매일 갱신합니다. (배열은 엄격한 JSON 형식 유지)
// eval: sim | emu | real | survey | mixed | unknown
// topic: 1=CXL Memory/PNM, 2=GPU Unified Memory(물리 공유), 3=CXL Case study/Eval/Survey, g=Graph
window.PAPERS = [
  {
    "id": "2603.26131",
    "title": "IBEX: Internal Bandwidth-Efficient Compression Architecture for Scalable CXL Memory Expansion",
    "venue": "ICS 2026",
    "topic": [
      "1"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/html/2603.26131",
    "date": "2026-03",
    "note": "블록 레벨 압축, cold 데이터 promotion 기반"
  },
  {
    "id": "2511.00321",
    "title": "PNM-KV / PnG-KV: Scalable Processing-Near-Memory for 1M-Token LLM Inference",
    "venue": "arXiv 2511.00321",
    "topic": [
      "1"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/abs/2511.00321",
    "date": "2025-11",
    "note": "CXL-PNM KV-cache 오프로드, 21.9x throughput"
  },
  {
    "id": "2502.07578",
    "title": "CENT: PIM Is All You Need — A CXL-Enabled GPU-Free System for LLM Inference",
    "venue": "ASPLOS 2025",
    "topic": [
      "1"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/html/2502.07578v1",
    "date": "2025-02",
    "note": "GPU 없이 CXL PIM-PNM 계층으로 LLM 추론"
  },
  {
    "id": "2404.19381",
    "title": "M²NDP: Low-overhead General-purpose Near-Data Processing in CXL Memory Expanders",
    "venue": "MICRO 2024",
    "topic": [
      "1"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/abs/2404.19381",
    "date": "2024-04",
    "note": "M²func + 마이크로스레드 NDP, CXL.mem 오프로딩"
  },
  {
    "id": "2512.11920",
    "title": "CXL-SpecKV: A Disaggregated FPGA Speculative KV-Cache for Datacenter LLM Serving",
    "venue": "FPGA 2026",
    "topic": [
      "1"
    ],
    "eval": "mixed",
    "url": "https://arxiv.org/abs/2512.11920",
    "date": "2025-12",
    "note": "FPGA 프로토타입 + 시뮬레이션"
  },
  {
    "id": "2407.07850",
    "title": "Harnessing Integrated CPU-GPU System Memory for HPC: A First Look into Grace Hopper",
    "venue": "ICPP 2024",
    "topic": [
      "2"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2407.07850",
    "date": "2024-07",
    "note": "GH200 통합 페이지 테이블 실측"
  },
  {
    "id": "2404.13195",
    "title": "Automatic BLAS Offloading on Unified Memory Architecture: A Study on NVIDIA Grace-Hopper",
    "venue": "arXiv 2404.13195",
    "topic": [
      "2"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2404.13195",
    "date": "2024-04",
    "note": "NVLink C2C 무수정 BLAS 오프로드"
  },
  {
    "id": "2501.14794",
    "title": "HeteroInfer: Characterizing Mobile SoC for Accelerating Heterogeneous LLM Inference",
    "venue": "SOSP 2025",
    "topic": [
      "2"
    ],
    "eval": "real",
    "url": "https://arxiv.org/pdf/2501.14794",
    "date": "2025-01",
    "note": "모바일 SoC GPU-NPU unified memory"
  },
  {
    "id": "epew2025-coexec",
    "title": "Accelerating Mobile Inference Through Fine-Grained CPU-GPU Co-Execution",
    "venue": "EPEW 2025 / LNCS 15657",
    "topic": [
      "2"
    ],
    "eval": "real",
    "url": "https://link.springer.com/chapter/10.1007/978-3-032-16345-5_4",
    "date": "2025-06",
    "note": "통합 메모리 CPU-GPU co-execution"
  },
  {
    "id": "2412.20249",
    "title": "Next-Gen Computing Systems with Compute Express Link: A Comprehensive Survey",
    "venue": "arXiv 2412.20249",
    "topic": [
      "3"
    ],
    "eval": "survey",
    "url": "https://arxiv.org/abs/2412.20249",
    "date": "2024-12",
    "note": "CXL 시스템 4분류 종합 서베이"
  },
  {
    "id": "tst-2025-9010010",
    "title": "Innovation in Computational Architecture: Opportunities and Challenges of CXL Memory Disaggregation Technology",
    "venue": "Tsinghua Sci. & Tech. 31(4)",
    "topic": [
      "3"
    ],
    "eval": "mixed",
    "url": "https://www.sciopen.com/article/10.26599/TST.2025.9010010",
    "date": "2026",
    "note": "실측 + 서베이 결합"
  },
  {
    "id": "2512.18194",
    "title": "TraCT: Disaggregated LLM Serving with CXL Shared Memory KV Cache at Rack-Scale",
    "venue": "arXiv 2512.18194",
    "topic": [
      "3"
    ],
    "eval": "emu",
    "url": "https://arxiv.org/abs/2512.18194",
    "date": "2025-12",
    "note": "TTFT 9.8x 감소, 에뮬레이션 추정 ⚠️"
  },
  {
    "id": "polarcxlmem",
    "title": "PolarCXLMem: Unlocking the Potential of CXL for Disaggregated Memory in Cloud-Native Databases",
    "venue": "SIGMOD 2025 Companion",
    "topic": [
      "3"
    ],
    "eval": "real",
    "url": "https://dl.acm.org/doi/10.1145/3722212.3724460",
    "date": "2025-06",
    "note": "PolarDB 상용 CXL 스위치 사례"
  },
  {
    "id": "scalepool",
    "title": "ScalePool: Hybrid XLink-CXL Fabric for Composable Resource Disaggregation",
    "venue": "arXiv (Oct 2025)",
    "topic": [
      "3"
    ],
    "eval": "sim",
    "url": "https://www.researchgate.net/publication/396541660",
    "date": "2025-10",
    "note": "XLink+CXL 하이브리드 패브릭 ⚠️"
  },
  {
    "id": "2602.08800",
    "title": "Equilibria: Fair Multi-Tenant CXL Memory Tiering At Scale",
    "venue": "arXiv 2602.08800",
    "topic": [
      "1"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2602.08800",
    "date": "2026-02",
    "note": "하이퍼스케일러 fleet 실환경, TPP 대비 52%"
  },
  {
    "id": "2602.22457",
    "title": "CXL-CCL: Node-Spanning GPU Collectives with CXL Memory Pooling",
    "venue": "ICS 2026",
    "topic": [
      "1"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2602.22457",
    "date": "2026-02",
    "note": "TITAN-II 스위치 + CZ120 실측"
  },
  {
    "id": "2503.17864",
    "title": "Architectural and System Implications of CXL-enabled Tiered Memory",
    "venue": "arXiv 2503.17864",
    "topic": [
      "1"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2503.17864",
    "date": "2025-03",
    "note": "DDR 대역폭 81% 감소 병목 규명"
  },
  {
    "id": "pvldb18-9-weisgut",
    "title": "CXL Memory Performance for In-Memory Data Processing",
    "venue": "PVLDB 18(9)",
    "topic": [
      "1"
    ],
    "eval": "real",
    "url": "https://dl.acm.org/doi/10.14778/3746405.3746432",
    "date": "2025-05",
    "note": "다중 CXL 디바이스 인터리빙 DB 분석"
  },
  {
    "id": "cidr2026-hashjoin",
    "title": "Hash Joins Meet CXL: A Fresh Look",
    "venue": "CIDR 2026",
    "topic": [
      "1"
    ],
    "eval": "real",
    "url": "https://www.vldb.org/cidrdb/papers/2026/p1-huang.pdf",
    "date": "2026-01",
    "note": "CXL 환경 Hash Join 재설계 ⚠️"
  },
  {
    "id": "2502.19233",
    "title": "HeteroMem: Exploring Memory Tiering Systems in the CXL Era via FPGA-based Emulation",
    "venue": "arXiv 2502.19233",
    "topic": [
      "1"
    ],
    "eval": "emu",
    "url": "https://arxiv.org/abs/2502.19233",
    "date": "2025-02",
    "note": "FPGA CXL 에뮬레이터 티어링 탐색"
  },
  {
    "id": "2408.11556",
    "title": "Understanding Data Movement in Tightly Coupled Heterogeneous Systems: Grace Hopper Case Study",
    "venue": "arXiv 2408.11556",
    "topic": [
      "2"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2408.11556",
    "date": "2024-08",
    "note": "Alps Quad GH200 캐릭터라이징"
  },
  {
    "id": "2603.23640",
    "title": "LLM Inference at the Edge: Mobile, NPU, and GPU Performance Efficiency Trade-offs Under Sustained Load",
    "venue": "arXiv 2603.23640",
    "topic": [
      "2"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2603.23640",
    "date": "2026-03",
    "note": "Pi5+Hailo, S24, iPhone16, RTX4050 실측"
  },
  {
    "id": "2506.09554",
    "title": "Understanding the Performance and Power of LLM Inferencing on Edge Accelerators",
    "venue": "PAISE 2025 (IPDPS)",
    "topic": [
      "2"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2506.09554",
    "date": "2025-06",
    "note": "Jetson Orin AGX 64GB 공유 메모리 실측"
  },
  {
    "id": "ieee-tc-rag-cxl",
    "title": "Performance Analysis and CXL Memory Optimization in Cluster-Based RAG Systems",
    "venue": "IEEE TC 75(4)",
    "topic": [
      "3"
    ],
    "eval": "real",
    "url": "https://dl.acm.org/doi/abs/10.14778/3685800.3685809",
    "date": "2026-04",
    "note": "클러스터 RAG CXL 최적화 (링크 재확인 필요)"
  },
  {
    "id": "pvldb17-hana",
    "title": "An Examination of CXL Memory Use Cases for In-Memory DBMS Using SAP HANA",
    "venue": "PVLDB 17(12)",
    "topic": [
      "3"
    ],
    "eval": "real",
    "url": "https://www.vldb.org/pvldb/vol17/p3827-ahn.pdf",
    "date": "2024-08",
    "note": "SAP HANA 상용 CXL, 재시작 40-84% 단축"
  },
  {
    "id": "2509.03377",
    "title": "CXL-NDP: Amplifying Effective CXL Memory Bandwidth for LLM Inference via Transparent Near-Data Processing",
    "venue": "arXiv 2509.03377",
    "topic": [
      "1"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/abs/2509.03377",
    "date": "2025-09",
    "note": "bit-plane layout + 무손실 압축, DRAMSim3"
  },
  {
    "id": "2412.15246",
    "title": "IKS: Compute-Enabled CXL Memory Expansion for Efficient Retrieval Augmented Generation",
    "venue": "ASPLOS 2025 / IEEE Micro",
    "topic": [
      "1",
      "3"
    ],
    "eval": "mixed",
    "url": "https://arxiv.org/abs/2412.15246",
    "date": "2024-12",
    "note": "CXL Type-2 near-memory ENNS 가속"
  },
  {
    "id": "2602.08271",
    "title": "ReCXL: Towards CXL Resilience to CPU Failures",
    "venue": "arXiv 2602.08271",
    "topic": [
      "3"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/abs/2602.08271",
    "date": "2026-02",
    "note": "coherence replication, 장애 시 30% slowdown"
  },
  {
    "id": "micro25-pim-pnm-rag",
    "title": "Accelerating Retrieval Augmented Language Model via PIM and PNM Integration",
    "venue": "MICRO 2025",
    "topic": [
      "1",
      "3"
    ],
    "eval": "sim",
    "url": "https://dl.acm.org/doi/10.1145/3725843.3756020",
    "date": "2025-10",
    "note": "PIM+PNM 통합 RAG 가속"
  },
  {
    "id": "asplos25-cxlfork",
    "title": "CXLfork: Fast Remote Fork over CXL Fabrics",
    "venue": "ASPLOS 2025 (Best Paper)",
    "topic": [
      "3"
    ],
    "eval": "unknown",
    "url": "https://dl.acm.org/doi/10.1145/3676641.3711998",
    "date": "2025-03",
    "note": "CXL 패브릭 원격 fork ⚠️ 평가방법 확인 필요"
  },
  {
    "id": "2512.04449",
    "title": "KAI: Offloading to CXL-based Computational Memory (Asynchronous Back-Streaming)",
    "venue": "arXiv 2512.04449",
    "topic": [
      "1"
    ],
    "eval": "mixed",
    "url": "https://arxiv.org/abs/2512.04449",
    "date": "2025-12",
    "note": "CXL.io+mem 비동기 파이프라인, Versal FPGA"
  },
  {
    "id": "2503.22017",
    "title": "Samsung CMM-H: Performance Characterizations and Usage Guidelines of CXL Memory Module Hybrid Prototype",
    "venue": "arXiv 2503.22017",
    "topic": [
      "1"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2503.22017",
    "date": "2025-03",
    "note": "DRAM캐시+NAND 하이브리드 프로토타입 실측"
  },
  {
    "id": "2507.03305",
    "title": "Optimized CXL-Attached Memory Allocation for Long-Context LLM Fine-Tuning",
    "venue": "arXiv 2507.03305",
    "topic": [
      "1"
    ],
    "eval": "real",
    "url": "https://arxiv.org/abs/2507.03305",
    "date": "2025-07",
    "note": "CXL AIC NUMA-aware allocation"
  },
  {
    "id": "2511.12286",
    "title": "Sangam: Chiplet-Based DRAM-PIM Accelerator with CXL Integration for LLM Inferencing",
    "venue": "arXiv 2511.12286",
    "topic": [
      "1"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/abs/2511.12286",
    "date": "2025-11",
    "note": "이종공정 칩렛 PIM, H100 대비 3.93x"
  },
  {
    "id": "2511.14400",
    "title": "PIM or CXL-PIM? Understanding Architectural Trade-offs Through Large-Scale Benchmarking",
    "venue": "arXiv 2511.14400",
    "topic": [
      "1",
      "3"
    ],
    "eval": "mixed",
    "url": "https://arxiv.org/abs/2511.14400",
    "date": "2025-11",
    "note": "실제 PIM HW + CXL trace 모델링"
  },
  {
    "id": "2312.03113",
    "title": "GPU Graph Processing on CXL-Based Microsecond-Latency External Memory",
    "venue": "SC-W 2023 (Kioxia)",
    "topic": [
      "1",
      "g"
    ],
    "eval": "emu",
    "url": "https://arxiv.org/abs/2312.03113",
    "date": "2023-12",
    "note": "FPGA 프로토타입, μs 레이턴시 허용 규명"
  },
  {
    "id": "2505.16096",
    "title": "COSMOS: A CXL-Based Full In-Memory System for Approximate Nearest Neighbor Search",
    "venue": "IEEE CAL / arXiv 2505.16096",
    "topic": [
      "1",
      "g"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/abs/2505.16096",
    "date": "2025-05",
    "note": "GPC 전체 ANNS 오프로드, 6.72x"
  },
  {
    "id": "2601.03229",
    "title": "SpANNS: Optimizing ANNS for Sparse Vectors Using Near Memory Processing",
    "venue": "arXiv 2601.03229",
    "topic": [
      "1",
      "g"
    ],
    "eval": "sim",
    "url": "https://arxiv.org/abs/2601.03229",
    "date": "2026-01",
    "note": "CXL Type-2 sparse ANNS, 15.2-21.6x"
  },
  {
    "id": "atc23-cxl-anns",
    "title": "CXL-ANNS: Software-Hardware Collaborative Memory Disaggregation and Computation for Billion-Scale ANNS",
    "venue": "USENIX ATC 2023",
    "topic": [
      "1",
      "g"
    ],
    "eval": "mixed",
    "url": "https://www.usenix.org/conference/atc23/presentation/jang",
    "date": "2023-07",
    "note": "16nm FPGA 검증 + gem5 full-system 시뮬레이션"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408613",
    "title": "Pulse: Fine-Grained Hierarchical Hashing Index for Disaggregated Memory",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408613",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "By decoupling compute and memory resources into independent pools that are provisioned and managed separately, disaggregated memory (DM) is promising to break the scaling constraints for memory systems and improve resour… (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408523",
    "title": "LoCaLUT: Harnessing Capacity-Computation Tradeoffs for LUT-Based Inference in DRAM-PIM",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408523",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "Lookup tables (LUTs) have recently gained attention as an alternative compute mechanism that maps input operands to precomputed results, eliminating the need for arithmetic logic. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408495",
    "title": "FlashFuser: Expanding the Scale of Kernel Fusion for Compute-Intensive Operators via Inter-Core Connection",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408495",
    "date": "2025-12-15",
    "fetched": "2026-07-07",
    "note": "The scaling of computation throughput continues to outpace improvements in memory bandwidth, making many deep learning workloads memory-bound. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408592",
    "title": "PIMphony: Overcoming Bandwidth and Capacity Inefficiency in PIM-Based Long-Context LLM Inference System",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408592",
    "date": "2024-12-28",
    "fetched": "2026-07-07",
    "note": "The expansion of long-context Large Language Models (LLMs) creates significant memory system challenges. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408588",
    "title": "PIM-Malloc: A Fast and Scalable Dynamic Memory Allocator for Processing-In-Memory (PIM) Architectures",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408588",
    "date": "2025-05-19",
    "fetched": "2026-07-07",
    "note": "The ability to dynamically allocate memory is fundamental in modern programming languages. However, this feature is not adequately supported in current general-purpose PIM devices. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408469",
    "title": "C³: CXL Coherence Controllers for Heterogeneous Architectures",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408469",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "We introduce C^3, a systematic methodology for designing Compute Express Link (CXL) coherence controllers, to overcome interoperability challenges that arise from the mismatch of coherence protocols… (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408452",
    "title": "AQPIM: Breaking the PIM Capacity Wall for LLMs with in-Memory Activation Quantization",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408452",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "Processing-in-Memory (PIM) architectures offer a promising solution to the memory bottlenecks in data-intensive machine learning, yet often overlook the growing challenge of activation memory footprint. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408437",
    "title": "Conduit: Programmer-Transparent Near-Data Processing Using Multiple Compute-Capable Resources in Solid State Drives",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408437",
    "date": "2026-01-24",
    "fetched": "2026-07-07",
    "note": "Near-data processing (NDP) mitigates the data movement bottleneck in modern computing systems by performing computation close to where the data resides. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408509",
    "title": "PhasedStore: Supporting High-Performance Write-Through Cache-Coherence Protocols Under TSO",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408509",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "Current multiprocessors that support the total store order (TSO) memory consistency model invariably use writeback (WB) cache-coherence protocols. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408595",
    "title": "CoCoTree: A Computation-Capable Architecture for Collective Communication in Scalable PIM",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408595",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "The growing demand for high-bandwidth and largecapacity memory access in data-intensive workloads has driven the development and deployment of Processing-in-Memory (PIM) architectures. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408527",
    "title": "ReScue: Reliable and Secure CXL Memory",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408527",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "Compute Express Link (CXL) fundamentally shifts the memory abstraction boundary, moving memory management functions from the host CPU to external controllers. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408611",
    "title": "Cohet: A CXL-Driven Coherent Heterogeneous Computing Framework with Hardware-Calibrated Full-System Simulation",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408611",
    "date": "2025-11-28",
    "fetched": "2026-07-07",
    "note": "Conventional heterogeneous computing systems built on PCIe interconnects suffer from inefficient fine-grained host-device interactions and complex programming models. (abstract 발췌)"
  },
  {
    "id": "10.1109/HPCA68181.2026.11408598",
    "title": "Adaptive Draft Sequence Length: Enhancing Speculative Decoding Throughput on PIM-Enabled Systems",
    "venue": "HPCA 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1109/HPCA68181.2026.11408598",
    "date": "2026-01-31",
    "fetched": "2026-07-07",
    "note": "Transformer-based large language models (LLMs) exhibit remarkable generative capabilities, but their inference throughput is limited by the autoregressive decoding process, which generates only one token per iteration. (abstract 발췌)"
  },
  {
    "id": "10.1145/3774934.3786411",
    "title": "PIM-zd-tree: A Fast Space-Partitioning Index Leveraging Processing-in-Memory",
    "venue": "PPoPP 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3774934.3786411",
    "date": "2026-01-28",
    "fetched": "2026-07-07",
    "note": "Space-partitioning indexes are widely used for managing multi-dimensional data, but their throughput is often memory-bottlenecked. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790121",
    "title": "A Programming Model for Disaggregated Memory over CXL",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790121",
    "date": "2024-07-23",
    "fetched": "2026-07-07",
    "note": "CXL (Compute Express Link) is an emerging open industry-standard interconnect between processing and memory devices that is expected to revolutionize the way systems are designed. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790146",
    "title": "CPU-Oblivious Offloading of Failure-Atomic Transactions for Disaggregated Memory",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790146",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Memory disaggregation introduces new challenges for application reliability, as compute server or interconnection failures can interrupt execution and lead to data inconsistency in the memory server. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790226",
    "title": "STARC: Selective Token Access with Remapping and Clustering for Efficient LLM Decoding on PIM Systems",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790226",
    "date": "2025-05-09",
    "fetched": "2026-07-07",
    "note": "Serving large language models (LLMs) places significant pressure on memory systems due to frequent accesses and growing key–value (KV) caches as context lengths increase. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790150",
    "title": "CXLMC: Model Checking CXL Shared Memory Programs",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790150",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Compute Express Link (CXL) shared memory is an emerging industry standard that will allow for cache coherent sharing of remote memory between many machines. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790198",
    "title": "PACT: A Criticality-First Design for Tiered Memory",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790198",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Tiered memory systems typically place pages based on access frequency (hotness), yet frequency alone fails to capture the true performance impact. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790212",
    "title": "REPA: Reconfigurable PIM for the Joint Acceleration of KV Cache Offloading and Processing",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790212",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "The use of KV cache in LLM inference leads to large memory footprint and sub-optimal decoding performance. Prior studies typically address one of these two limitations by either offloading or stage-split inference. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790203",
    "title": "PIPM: Partial and Incremental Page Migration for Multi-host CXL Disaggregated Shared Memory",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790203",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "The emerging Compute Express Link (CXL) interconnect supports multi-host cache-coherent disaggregated shared memory (CXL-DSM). (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790148",
    "title": "CREST: High-Performance Contention Resolution for Disaggregated Transactions",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790148",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Distributed transaction systems can leverage memory disaggregation for efficient resource scaling, yet they experience significant performance degradation under high-contention workloads. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790245",
    "title": "vCXLGen: Automated Synthesis and Verification of CXL Bridges for Heterogeneous Architectures",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790245",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Compute Express Link (CXL) offers byte-addressable, cache-coherent remote memory accesses across multiple hosts. (abstract 발췌)"
  },
  {
    "id": "10.1145/3760250.3762217",
    "title": "SuperOffload: Unleashing the Power of Large-Scale LLM Training on Superchips",
    "venue": "ASPLOS 2026",
    "topic": [
      "2"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3760250.3762217",
    "date": "2025-09-25",
    "fetched": "2026-07-07",
    "note": "The emergence of Superchips represents a significant advancement in next-generation AI hardware. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790197",
    "title": "Ouroboros: Wafer-Scale SRAM CIM with Token-Grained Pipelining for Large Language Model Inference",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790197",
    "date": "2026-03-03",
    "fetched": "2026-07-07",
    "note": "Large language model (LLM) inference demands vast memory capacity and hierarchical memory structures, but conventional architectures suffer from excessive energy and latency costs due to frequent data movement across dee… (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790201",
    "title": "Performance Predictability in Heterogeneous Memory",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790201",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Heterogeneous memory combining DRAM and CXL exhibits variable performance, yet existing metrics correlate weakly with actual slowdown. We present CAMP, a principled framework for predicting CXL-induced slowdown. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790149",
    "title": "Cxlalloc: Safe and Efficient Memory Allocation for a CXL Pod",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790149",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "A Compute Express Link (CXL) pod is a group of hosts that share CXL-attached memory. (abstract 발췌)"
  },
  {
    "id": "10.1145/3767295.3769321",
    "title": "TierScape: Harnessing Multiple Compressed Tiers to Tame Server Memory TCO",
    "venue": "EuroSys 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3767295.3769321",
    "date": "2026-04-26",
    "fetched": "2026-07-07",
    "note": "Tiered memory systems are the norm to effectively tackle the increasing memory total cost of ownership (TCO) in modern data centers. (abstract 발췌)"
  },
  {
    "id": "10.1145/3767295.3769371",
    "title": "MTTM: Dynamic Fast Memory Partitioning with Bandwidth Optimization for Multi-tenant Cloud",
    "venue": "EuroSys 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3767295.3769371",
    "date": "2026-04-26",
    "fetched": "2026-07-07",
    "note": "Memory tiering, which extends local DRAM by incorporating remote DRAM or NVM via Compute Express Link (CXL), offers a promising solution to the DRAM capacity scaling problem. (abstract 발췌)"
  },
  {
    "id": "10.1145/3767295.3803621",
    "title": "Accelerating Transactional Execution via Processing-In-Memory",
    "venue": "EuroSys 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3767295.3803621",
    "date": "2026-04-26",
    "fetched": "2026-07-07",
    "note": "Processing-in-Memory (PIM) integrates compute capabilities directly into memory modules to reduce costly data movement, promising large performance gains for data-intensive workloads. (abstract 발췌)"
  },
  {
    "id": "10.1145/3767295.3769344",
    "title": "Rearchitecting Programmable Networks For In-Network Computing: From Hardware To Language",
    "venue": "EuroSys 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3767295.3769344",
    "date": "2026-04-26",
    "fetched": "2026-07-07",
    "note": "In-network computing (INC) offers orders-of-magnitude performance gains for various applications. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790142",
    "title": "CoGraf: Fully Accelerating Graph Applications with Fine-Grained PIM",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790142",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Processing-in-Memory (PIM) delivers enormous performance by taking advantage of internal DRAM bandwidth and parallelism. However, graph applications are difficult to adapt to PIM due to their irregular access patterns. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790137",
    "title": "CEMU: Enabling Full-System Emulation of Computational Storage Beyond Hardware Limits",
    "venue": "ASPLOS 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790137",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "Computational storage drives (CSDs) present a promising approach to improve system performance through near data processing in SSDs. (abstract 발췌)"
  },
  {
    "id": "10.1145/3779212.3790181",
    "title": "LAIKA: Machine Learning-Assisted In-Kernel APU Acceleration",
    "venue": "ASPLOS 2026",
    "topic": [
      "2"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3779212.3790181",
    "date": "2026-03-22",
    "fetched": "2026-07-07",
    "note": "The integration of machine learning (ML) into OS kernels is severely hampered by the high latency of offloading to discrete GPUs (dGPUs), where data transfers across the PCIe bus can consume over 93% of the total executi… (abstract 발췌)"
  },
  {
    "id": "10.1145/3767295.3803602",
    "title": "AEP: Achieving Hierarchical Fault Tolerance in DSM Through Atomic Execution Protection",
    "venue": "EuroSys 2026",
    "topic": [
      "1"
    ],
    "eval": "unknown",
    "url": "https://doi.org/10.1145/3767295.3803602",
    "date": "2026-04-26",
    "fetched": "2026-07-07",
    "note": "Recent advances in CXL 3.0 have revitalized Distributed Shared Memory (DSM), enabling zero-copy sharing across machine nodes at near-NUMA latency and making shared-memory communication practical for distributed applicati… (abstract 발췌)"
  }
];

// 다시 추천하지 않을 논문 (사용자 제외 지정)
window.EXCLUDED = [
  {
    "id": "unified-splitting-jetson",
    "title": "Unified Splitting: Inference Utilizing Unified Memory Architecture"
  }
];
