export const contents = [
    {
        name: "module_1",
        korean_name: "이상행위 탐지 모델",
        introduction: [
            `- 주거지역 내에서 이상행동을 탐지하여 범죄를 사전에 예방하는 데 중점을 둔 이상행위 탐지 모델로 거주지역의 치안을 강화하기 위한 능동적인 서비스를 제공한다.`,
            `- 이를 통해 주민들은 안전한 환경에서 생활할 수 있으며, 범죄 발생 가능성을 최소화하는 데 도움을 받을 수 있다.`,
        ],
        architecture: [
            `입력: 영상 및 스켈레톤 데이터을 전달한다.`,
            `프레임단위로 이미지 저장:동영상 데이터를 입력으로 받아 프레임단위로 이미지로 저장한다.`,
            `모델별 이상행동 예측: 저장한 이미지를 C3D, CNN-RNN을 통하여 이상행동을 예측하여 해당 이상행동의 라벨값으로 반환한다.`,
            `모델별 예측 결과 입력: C3D의 예측 결과값과 CNN_RNN의 예측 결과값그리고 실제 값을 입력으로 받는다.`,
            `최종 예측 결과 제공: C3D , CNN_RNN의 예측 결과값 및 실제 값을 입력으로 받음으로써 최종적으로 해당 데이터(영상,JSON)의 최종적으로 예측한 이상행동 결과 값을 반환한다.`,
        ],
    },
    {
        name: "module_2",
        korean_name: "QA 모델",
        introduction: [
            `해당 모델은 DistilBert를 활용한 RobustQA 모델로 자동 질의응답 시스템, 가상비서 시스템, 검색 엔진 등에서 활용할 수 있으며 긴 문장에서 질문을 통하여 원하는 내용을 손쉽게 확인할 수 있다.`,
        ],
        architecture: [
            `전체 문장 입력: 확인하고자 하는 전체 문장을 입력한다.`,
            `질의 내용 입력: 전체 문장에서 확인하고자 하는 질의 내용을 입력한다.`,
            `토큰화: 입력한 전체 문장과 질의 내용을 전처리하여 토큰화하고, 단어나 문장의 임베딩을 생성한다.`,
            `문맥 파악: 입력한 전체 문장과 질의 내용을 transformer를 사용하여 문맥을 파악한다.`,
            `답변 생성: 이전 단계에서 추출된 정보와 분석 결과를 기반으로 답변을 생성한다.`,
        ],
    },
    {
        name: "module_3",
        korean_name: "딥러닝 기반 사진 검색 모델",
        introduction: [
            `- 이미지 분석 기반 검색 엔진은 컴퓨터 비전 및 이미지 인식 기술을 사용하여 검색 결과를 생성하는 기술이며, 이미지의 시각적 특징과 패턴을 분석하고 이를 기반으로 유사한 이미지를 찾거나 관련 정보를 추출한다.`,
            `- 사용자가 이미지를 제공하면 해당 이미지의 시각적 특징을 추출하고 이를 이미지 데이터베이스와 비교하여, 유사한 이미지를 찾거나 관련 정보를 제공한다.`,
            `- 이미지 분석 기반 검색 기술은 다양한 응용 분야에서 사용되고 있다. 예를 들어, 온라인 쇼핑 사이트에서는 사용자가 원하는 제품의 이미지를 제공하면 해당 제품과 유사한 제품을 추천하거나, 관련된 제품 정보를 제공하여 쇼핑 경험을 개선할 수 있다.`,
        ],
        architecture: [
            `OCR 기술과 YOLO를 결합하여 이미지 검색을 수행하는 방법이다.`,
            `이미지 입력: 검색하려는 이미지를 전달한다.`,
            `OCR 적용: 입력된 이미지에 OCR 기술을 적용하여 이미지에서 텍스트를 추출한다.`,
            `텍스트 검색: 추출된 텍스트를 기반으로 검색 엔진 또는 데이터베이스를 사용하여 관련된 정보를 찾는다.`,
            `YOLO를 사용한 객체 감지: OCR로 추출된 텍스트 외에도 이미지에서 객체를 감지하기 위해 YOLO를 적용해서 YOLO는 이미지 내에 있는 객체들을 감지하고, 객체의 위치와 클래스를 예측하는 경계 상자를 생성한다.`,
            `객체 정보와 텍스트 결합: OCR로 추출된 텍스트와 YOLO로 예측된 객체의 위치와 클래스 정보를 결합한다. 이를 통해 텍스트와 객체 정보를 연결하여 텍스트와 객체 간의 관련성을 파악할 수 있다.`,
            `이미지 검색 결과 제공: 최종적으로 검색 시스템은 텍스트와 객체 정보를 결합한   기반으로 이미지 검색 결과를 제공한다.`,
        ],
    },
];
