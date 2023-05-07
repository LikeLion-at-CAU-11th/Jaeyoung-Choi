const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=6&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=bYQGsAKI%2Bo82D2RXIxbqqkFsNUYLBEPVhUC2EJPU%2BTyBCPeke9iZNM8K1R8v3ZEqeuGw1An9%2BlDqAQsyzA4sig%3D%3D`;

const container = document.getElementById("container");
let count = -1;

async function getData() {
  const random = Math.floor(Math.random() * 100 + 1);
  count++;
  const fetchData = await fetch(url);
  console.log(fetchData);

  const toJson = await fetchData.json();
  console.log(toJson);

  const myData = await toJson.response.body.items.item;
  console.log(myData);

  {
    myData.map((data, i) => {
      const link = document.createElement("div");
      link.id = "list";
      const image = document.createElement("img");

      image.src = data.galWebImageUrl;
      console.log(image.src);

      const text = document.createElement("span");
      text.innerText = `${i + 1 + 5 * count}번째 사진
      제목:${data.galTitle} 
      장소:${data.galPhotographyLocation}`;
      const button = document.createElement("button");
      button.innerText = "더 보기";
      button.addEventListener("click", () => {
        detailData(data);
      });

      container.appendChild(link);
      link.appendChild(image);
      link.appendChild(text);
      link.appendChild(button);
    });
  }
}

function detailData(data) {
  // 상세 정보를 담을 페이지 생성
  const detailPage = document.createElement("div");
  detailPage.className = "detail-page";

  // x버튼 추가
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.setAttribute("class", "x-btn");
  detailPage.appendChild(btn);
  btn.addEventListener("click", () => {
    btn.parentNode.remove();
  });

  // 제목 추가
  const title = document.createElement("h2");
  title.innerText = `제목: ${data.galTitle}`;
  detailPage.appendChild(title);

  // 키워드 추가
  const keyWord = document.createElement("p");
  keyWord.innerText = `검색 키워드: ${data.galSearchKeyword}`;
  detailPage.appendChild(keyWord);

  // 사진작가 추가
  const photographer = document.createElement("p");
  photographer.innerText = `사진작가: ${data.galPhotographer}`; // 수정된 부분
  detailPage.appendChild(photographer);

  // 날짜 추가(함수로 바꾸기)
  const date = document.createElement("p");
  const time = data.galCreatedtime;

  function timeStamp(t) {
    const year = t.slice(0, 4);
    const month = t.slice(4, 6);
    const day = t.slice(6, 8);
    const hour = t.slice(8, 10);
    const minute = t.slice(10, 12);
    const second = t.slice(12, 14);
    const createDate = new Date(
      `${year}-${month}-${day}T${hour}:${minute}:${second}`
    ).toLocaleString();

    return createDate;
  }

  date.innerText = `날짜: ${timeStamp(time)}`;
  console.log(date);
  detailPage.appendChild(date);

  // 상세 정보를 담은 페이지를 body에 추가
  document.body.appendChild(detailPage);
}
