// export function getPackageImages(
//   folder: string
// ): string[] {

//   const images: string[] = [];

//   // const files = import.meta.glob(
//   //   '/src/assets/images/packages/**',
//   //   {
//   //     eager: true,
//   //     query: '?url',
//   //     import: 'default'
//   //   }
//   );


//   Object.keys(files).forEach(path => {

//     if (
//       path.includes(`/packages/${folder}/`) &&
//       (
//         path.endsWith('.webp') ||
//         path.endsWith('.jpg') ||
//         path.endsWith('.jpeg')
//       )
//     ) {

//       images.push(
//         path.replace('/src/', '')
//       );

//     }

//   });


//   return images.sort((a,b) =>
//     a.localeCompare(b, undefined, {numeric:true})
//   );

// }
