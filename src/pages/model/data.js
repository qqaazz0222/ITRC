// 이미지
import Model_NIA_Structure from "@/assets/images/nia.png";
import Model_RobustQA_Structure from "@/assets/images/robustqa.png";
import Model_DeepScan_Structure from "@/assets/images/deepscan.png";

// Project : NIA
const niaData = {
    project: "이상행위 탐지 모델",
    desc: "Abnormal Behavior Detection",
    tags: ["이상행위감지", "징후감지", "범죄감지"],
    demo: "/demo/nia",
    introduction:
        "우리의 일상 공간인 주거지역은 누구나 평온하고 안전하게 생활하기를 바라는 곳입니다. 하지만 때때로 예기치 못한 이상 행동이나 범죄로부터의 위협은 이 평화를 해칠 수 있습니다. 이러한 문제를 해결하기위해, 우리 연구팀은 주거지역 내에서 이상 행동을 실시간으로 탐지하여 범죄를 사전에 예방하는 데 중점을 둔 이상행위 탐지 모델을 개발하였습니다.",
    goal: "본 모델은 CCTV와 같은 감시 장치에서 수집된 데이터를 기반으로, 비정상적인 행동 패턴을 식별하고 분석합니다. 목표는 간단합니다. 거주지역의 치안을 강화하고, 주민들이 더 안전한 환경에서 생활할 수 있도록 돕는 것입니다.",
    features: [
        {
            title: "실시간 이상 행동 탐지",
            desc: "모델은 CCTV 등의 감시 장치로부터 수집된 영상 데이터를 실시간으로 분석하여 이상 행동을 식별합니다. 이는 즉각적인 대응을 가능하게 하여 범죄 예방에 큰 역할을 합니다.",
        },
        {
            title: "다양한 이상 행동의 인식",
            desc: "이 모델은 단순한 비정상적 움직임뿐만 아니라, 폭력적 행동, 의심스러운 집단 모임, 장시간 정지와 같은 다양한 유형의 이상 행동을 인식할 수 있습니다.",
        },
        {
            title: "인식 가능 행동 목록",
            cells: [
                "아동 방임",
                "성인이 아이를 밀침",
                "성인이 아이를 발로 위협",
                "성인이 아이를 손으로 위협",
                "유모차 방치",
                "유모차를 세게 밀침",
                "유모차를 발로 참",
                "유모차를 세게 올려내리침",
                "아이가 돌아다님",
                "아이가 넘어짐",
                "아이가 쫓김",
                "아이 혼자 서성거림",
                "아이 혼자 앉아있음",
                "성인이 아이를 던짐",
                "성인이 아이의 머리를 때림",
                "유모차 엎어버림",
                "초인종을 계속 누름",
                "문 오픈 계속 시도",
                "문을 발로 계속 참",
                "문 안쪽을 보려고 계속 시도",
                "문을 오래 두드림",
                "칼로 위협",
                "방망이로 위협",
                "주먹으로 침",
                "뺨때리기",
                "발차기",
                "팔꿈치로 침",
                "무릎으로 치기",
                "공구로 때림",
                "택배 훔쳐가기",
                "차량 절도 시도",
            ],
        },
        {
            title: "인식 가능 징후 목록",
            cells: [
                "아이가 서성거림",
                "아이가 고개를 숙이고 있음",
                "아이가 절뚝거림",
                "성인과 아이가 무관심한 상태로 걸어감",
                "아이가 쓰러져 있음",
                "아이가 바닥에 앉아있음",
                "아이가 벽(기둥, 문 등)에 기대어 있음",
                "성인의 무관심함과 아이가 성인의 몸(팔, 발, 옷 등)을 잡아당김",
                "성인이 아이에게 삿대질함",
                "성인이 아이의 몸(팔, 발, 옷 등)을 잡아당김",
                "성인이 아이 목을 껴안고 있음",
                "성인이 아이를 업고 있음",
                "성인이 유모차 주변에서(또는 유모차를 잡고) 두리번거림",
                "아이가 돌아다님",
                "사람이 문앞으로 다가가 서성거림",
                "사람이 문앞으로 다가가 서있음",
                "사람이 문앞으로 다가가 앉아있음",
                "사람과 칼 객체 인식",
                "사람과 방망이 객체 인식",
                "사람과 공구 객체 인식",
                "사람이 다른 사람에게 삿대질함",
                "사람이 다른 사람을 계속 쳐다봄",
                "사람이 다른 사람의 길을 방해함",
                "사람이 복면 착용",
                "사람이 택배 앞으로 다가가 서성거림",
                "사람이 택배 앞으로 다가가 서있음",
                "사람이 택배 앞으로 다가가 앉아있음",
                "사람이 차량앞으로 다가가 서성거림",
                "사람이 차량 주변으로 다가가 서있음",
                "사람이 차량 주변으로 다가가 앉아있음",
                "사람이 바닥에 앉아있음",
                "사람이 벽(또는 기둥)에 기대어 있음",
            ],
        },
        {
            title: "인식 가능 범죄 목록",
            cells: [
                "아동학대-방임",
                "아동학대-신체학대",
                "주거침입-문",
                "폭행/강도-위협물체",
                "폭행/강도-위협행동",
                "절도-문앞",
                "절도-주차장",
            ],
        },
        {
            title: "데이터 학습 및 개선",
            desc: "모델은 지속적으로 수집되는 데이터로부터 학습하여, 탐지 정확도를 점차 향상시키고 새로운 유형의 이상행위에도 신속하게 적응합니다.",
        },
    ],
    advantages: [
        {
            title: "즉각적인 대응 가능",
            desc: "이상 행동이 탐지되면, 관련 당국이나 주민에게 즉시 알림을 보내어 신속한 대응을 가능하게 합니다.",
        },
        {
            title: "범죄 예방",
            desc: "이상 행동의 조기 발견과 즉각적인 대응은 범죄 발생 가능성을 크게 줄여주어, 안전한 주거 환경을 조성하는 데 기여합니다.",
        },
        {
            title: "환경적 유연성",
            desc: "다양한 환경과 조건에서도 효과적으로 작동할 수 있도록 설계되어, 날씨 변화나 조명 조건의 변화에도 높은 탐지 정확도를 유지합니다.",
        },
        {
            title: "커뮤니티 의식 강화",
            desc: "이상 행위 탐지 모델의 도입은 주민들 사이의 안전에 대한 인식을 높이고, 커뮤니티 의식을 강화하는 효과를 가져옵니다.",
        },
        {
            title: "경제적 비용 절감",
            desc: "범죄로 인한 경제적 손실과 치안 유지를 위한 비용을 절감할 수 있으며, 장기적으로 사회적 비용 절감에도 기여합니다.",
        },
    ],
    structure: {
        image: Model_NIA_Structure,
    },
};

// Project : robust
const robustQaData = {
    project: "자동 질의응답 모델",
    desc: "Question & Answer",
    tags: ["질의응답", "가상비서", "검색엔진", "장문검색"],
    demo: "/demo/robustqa",
    introduction:
        "본 모델은 DistilBert를 기반으로 한 RobustQA 모델입니다. 일상생활에서 정보의 필요성은 점점 더 커지고 있습니다. 우리는 매일 수많은 질문과 결정에 직면하며, 이를 위해 정확하고 신속한 정보의 접근이 필수적입니다. 예를 들어, 요리를 하면서 특정 재료의 대체품을 찾아야 할 때, 건강 관련 정보를 신속하게 알고 싶을 때, 혹은 새로운 기술이나 주제에 대한 깊이 있는 이해가 필요할 때 등 우리의 일상은 끊임없이 정보를 찾고 이해하는 과정으로 이루어져 있습니다. 이러한 정보의 바다에서 원하는 정보를 찾는 것은 종종 시간 소모적이고 어려운 일입니다. 특히, 긴 문서나 기사, 논문 등에서 특정 정보를 찾아내려 할 때, 전체 내용을 일일이 읽어보지 않고서는 원하는 답을 얻기 어렵습니다. 이런 상황에서 우리의 RobustQA 모델은 사용자가 간단한 질문을 통해 필요한 정보를 즉시 찾을 수 있도록 도와줍니다. 이를 통해 정보 검색에 소요되는 시간을 대폭 줄이고, 정보의 질을 향상시킬 수 있습니다. 또한, 가상비서 시스템을 통해 일상적인 질문에 대한 답변을 제공하거나, 사용자의 요구에 맞는 정보를 제공함으로써 일상 생활의 편의성을 증대시키는 역할도 할 수 있습니다. 예를 들어, 날씨 정보, 일정 관리, 실시간 뉴스 업데이트 등 사용자가 필요로 하는 다양한 정보를 제공받음으로써 더욱 효율적이고 편리한 생활이 가능해집니다. 이처럼, RobustQA 모델은 일상생활 속에서 사용자가 직면하는 다양한 정보의 필요에 신속하고 정확하게 대응할 수 있는 강력한 도구입니다. 정보의 접근성을 향상시키고, 시간과 노력을 절약할 수 있도록 도와주며, 결국 사용자의 삶의 질을 한 단계 끌어올리는 데 기여합니다.",
    goal: "본 모델의 주요 목표는 사용자의 질문에 대해 정확하고 신속한 답변을 제공하는 것입니다. 이를 통해 정보 검색의 효율성을 극대화하고, 사용자의 시간과 노력을 절약할 수 있게 합니다. 또한, 복잡하고 다양한 데이터 속에서도 정확한 답변을 추출해내는 능력을 갖추어, 사용자 경험을 향상시키는 것을 목표로 합니다.",
    features: [
        {
            title: "전체 문장 입력",
            desc: "사용자는 확인하고자 하는 전체 문장을 입력합니다.",
        },
        {
            title: "질의 내용 입력",
            desc: "사용자는 전체 문장에서 확인하고자 하는 질의 내용을 입력합니다.",
        },
        {
            title: "토큰화 및 임베딩 생성",
            desc: "입력받은 문장과 질의 내용을 토큰화하고, 이를 바탕으로 단어나 문장의 임베딩을 생성합니다.",
        },
        {
            title: "문맥 파악",
            desc: "Transformer 기술을 사용하여 입력된 문장과 질의의 문맥을 파악합니다.",
        },
        {
            title: "답변 생성",
            desc: "문맥 파악 단계를 통해 추출된 정보와 분석 결과를 기반으로 정확한 답변을 생성합니다.",
        },
    ],
    advantages: [
        {
            title: "높은 정확도",
            desc: "DistilBert와 Transformer 기술을 결합하여 높은 정확도의 답변을 제공합니다.",
        },
        {
            title: "다양한 활용 가능성",
            desc: "자동 질의응답, 가상비서, 검색 엔진 등 다양한 분야에서 폭넓게 활용할 수 있습니다.",
        },
        {
            title: "사용자 친화적",
            desc: "긴 문장 속에서도 사용자가 원하는 정보를 쉽고 빠르게 찾을 수 있도록 설계되었습니다.",
        },
    ],
    structure: {
        image: Model_RobustQA_Structure,
    },
};

// Project : DeepScan
const deepScanData = {
    project: "딥러닝 기반 사진 검색 모델",
    desc: "Deeplearning Image Search",
    tags: ["딥러닝", "이미지검색", "컴퓨터비전", "OCR"],
    demo: "/demo/deepscan",
    introduction:
        "이미지 분석 기반 검색 엔진은 컴퓨터 비전과 이미지 인식 기술을 활용하여 검색 결과를 생성하는 혁신적인 기술입니다. 이미지의 시각적 특징과 패턴을 분석하여 유사한 이미지를 찾거나 관련 정보를 추출하는 데 초점을 맞추고 있습니다. 사용자가 이미지를 업로드하면, 해당 이미지의 시각적 특성을 추출하여 이미지 데이터베이스와 비교함으로써 유사한 이미지를 찾아내거나 관련 정보를 제공합니다. 이 기술은 온라인 쇼핑, 디지털 아카이브, 소셜 미디어 등 다양한 분야에서 응용되어 사용자 경험을 향상시키고 있습니다.",
    goal: "본 모델의 주요 목표는 이미지 내의 시각적 요소뿐만 아니라 텍스트 정보까지도 포괄적으로 분석하여 보다 정확하고 풍부한 검색 결과를 제공하는 것입니다. OCR 기술과 YOLO 객체 감지 알고리즘을 결합함으로써, 이미지 내의 텍스트와 객체를 모두 인식하고 분석하여 사용자가 찾고자 하는 정보를 빠르고 정확하게 찾아낼 수 있도록 합니다.",
    features: [
        {
            title: "이미지 입력 및 분석",
            desc: "사용자가 제공한 이미지를 바탕으로 시각적 특징을 추출합니다.",
        },
        {
            title: "OCR 적용:",
            desc: "이미지에서 텍스트를 추출하기 위해 OCR 기술을 적용합니다.",
        },
        {
            title: "텍스트 검색",
            desc: "추출된 텍스트를 기반으로 관련 정보를 검색합니다.",
        },
        {
            title: "YOLO를 사용한 객체 감지",
            desc: "이미지 내 객체를 감지하여 위치와 클래스 정보를 제공합니다.",
        },
        {
            title: "텍스트와 객체 정보 결합",
            desc: "추출된 텍스트와 객체 정보를 결합하여 텍스트와 객체 간의 관계를 분석합니다.",
        },
        {
            title: "이미지 검색 결과 제공",
            desc: "최종적으로 사용자에게 텍스트와 객체 정보를 결합한 이미지 검색 결과를 제공합니다.",
        },
    ],
    advantages: [
        {
            title: "풍부한 정보 제공",
            desc: "OCR과 YOLO를 결합함으로써, 이미지 내의 텍스트와 객체 정보를 모두 활용하여 보다 풍부한 검색 결과를 제공합니다.",
        },
        {
            title: "높은 정확도와 신속성",
            desc: "이미지의 시각적 특징과 텍스트 정보를 동시에 분석함으로써 정확도를 높이고, 사용자가 원하는 정보를 신속하게 제공할 수 있습니다.",
        },
        {
            title: "다양한 분야에서의 응용 가능성:",
            desc: "이 기술은 온라인 쇼핑, 디지털 아카이브, 소셜 미디어 등 다양한 분야에 응용될 수 있어, 넓은 범위의 사용자 경험을 향상시킬 수 있습니다.",
        },
    ],
    structure: {
        image: Model_DeepScan_Structure,
    },
};

export { niaData, robustQaData, deepScanData };
