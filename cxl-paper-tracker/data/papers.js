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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 1,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 2,
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
    "round": 3,
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
    "round": 3,
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
    "round": 3,
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
    "round": 3,
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
    "round": 3,
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
    "round": 4,
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
    "round": 4,
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
    "round": 4,
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
    "round": 5,
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
    "round": 5,
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
    "round": 5,
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
    "round": 5,
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
    "round": 5,
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
    "round": 5,
    "note": "16nm FPGA 검증 + gem5 full-system 시뮬레이션"
  }
];

// 다시 추천하지 않을 논문 (사용자 제외 지정)
window.EXCLUDED = [
  {
    "id": "unified-splitting-jetson",
    "title": "Unified Splitting: Inference Utilizing Unified Memory Architecture"
  }
];
