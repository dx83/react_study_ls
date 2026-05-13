import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const Study_PapaParse = () => {
  const handleExport = () => {
    const data = [
      { Name: "김철수", Age: 25 },
      { Name: "이영희", Age: 30 },
      { Name: "장순자", Age: 40 },
    ];
    // 1. csv 문자열 변환
    const csv = Papa.unparse(data);
    // 2. Blob 생성 (한글 깨짐 방지 BOM 추가)
    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    // 3. FIleSaver의 savaAs 함수 사용
    // 자동으로 링크 생성, 클릭, 다운로드, 메모리 해제까지 처리
    saveAs(blob, 'data.csv');
  };

  const loadLocalCsv = () => {
    Papa.parse("/data.csv", { // public 폴더 기준 경로
      download: true,
      header: true,
      complete: (results) => {
        console.log(results.data);
        console.log(results.data[2].Name);
      }
    });
  };

  return (
    <div>
      <h1>PapaParse Export 연습</h1>
      <button onClick={handleExport}>CSV 다운로드</button>
      <button onClick={loadLocalCsv}>CSV 읽기</button>
    </div>
  );
};

export default Study_PapaParse;