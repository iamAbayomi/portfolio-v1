import CodeComponent from "@/component/CodeComponent";
import { resumeLink } from "@/utils/constant";
import { footerLink } from "@/utils/dummyvalues";
import Link from "next/link";
import { useRouter } from "next/router";
import { CopyBlock, dracula } from "react-code-blocks";

const Index = () => {
  const router = useRouter();
  //const link =

  function viewHomePage() {
    router.push("/");
  }

  return (
    <div className="">
      <div className="bg-black text-white min-h-screen pt-4 px-0 pb-[50px]">
        <div className="flex items-center px-10">
          <p className="text-[42px] font-bold pointer" onClick={viewHomePage}>
            {" "}
            O.A
          </p>
          <div className="flex ml-[71px] gap-6 pointer">
            <Link href={resumeLink} target={"_blank"}>
              <p>Resume</p>
            </Link>
            <Link href={"https://blog.oladiniabayomi.com/"} target={"_blank"}>
              <p>Blog</p>
            </Link>
            <Link href={"./projects"} target={"_blank"}>
              <p>Projects</p>
            </Link>
          </div>
        </div>

        <div className="w-full h-[80vh] px-[20px] max-w-[800px] mx-auto overflow-scroll  ">
          <p className="text-[30px] text-center">Auto Complete</p>
          <div>
            <p className="mt-[40px]">
              This is the system design for an auto complete feature. The design
              system uses the Radio format using Requirements, architecture,
              data, interface definition (API) and optimization.
            </p>
            <div>
              <p className="mt-[40px] text-[20px]">Requirements</p>
              <p className="mt-[20px]">
                The requirement is using only text and the and the autocomplete
                works only on mobile, desktop and tablet devices.
              </p>
            </div>
            <div>
              <p className="mt-[20px] text-[20px]">Architecture</p>
              <p className="mt-[20px]">
                The architecture of the application uses Input field UI, Results
                UI, Cache and Controller classes. The input field handles the UI
                and passes the user input to the controller. The results UI
                component receives the result from the controller and presents
                it to the user. It also handles the user selection and informs
                the controller which input was selected. The classes were
                written in typescript and appropriate types were assigned.
              </p>
            </div>
            <div>
              <p className="mt-[20px] text-[20px]">Data </p>
              <p className="mt-[20px]">
                The data model consist of the user input, the results and the
                cache storage. The cache can be used in different manner, you
                can calculate the cache storage with the timeStamp and the
                duration of now.
              </p>
            </div>
            <div>
              <p className="mt-[20px] text-[20px]">Interface </p>
              <p className="mt-[20px]">
                The interface represents how the user would interact with the
                component. The user can pass these props to the components to
                get the number of results, the API URl, the event listeners and
                the custom theming
              </p>
            </div>
            <div>
              <p className="mt-[20px] text-[20px]">Optimization</p>
              <p className="mt-[20px]">
                You can use several optimizations strategy like handling
                multiple calls to the network, handling the concurrent requests,
                failed requests and the retries and offiline usage. You can also
                use optimization stragies like cache storage to reduce multiple
                calls to the network.
                <br />
                To improve the user experience you can add this feature to the
                application autofocus, accessibilty features for the auto
                complete search bar
              </p>
            </div>
            <div>
              <p className="mt-[20px] text-[20px]">Code</p>
              <p className="mt-[20px]">
                To build the application you need to create the input field UI
                class, the results UI class, the cache class and the controller
                class. The input field class should have the following methods:
              </p>
              <CopyBlock
                text={`export class MemoryCache<T> {
                    private cache: Map<string, { results: T; timestamp: number }>;
                    private cacheDuration: number;
                    // Cache duration is in milliseconds, default is 5 minutes
                    constructor(cacheDuration: number = 300000) {
                        this.cache = new Map();
                        this.cacheDuration = cacheDuration;
                    }

                    get(query: string): T | null {
                        const entry = this.cache.get(query);
                        if (!entry) return null;

                        const { results, timestamp } = entry;
                        if (Date.now() - timestamp > this.cacheDuration) {
                            this.cache.delete(query);
                            return null;
                        }
                        return results;
                    }

                    set(query: string, results: T): void {
                        this.cache.set(query, {
                            results,
                            timestamp: Date.now()
                        });
                    }

                    clear(): void {
                        this.cache.clear();
                    }
                } 
                  `}
                language="typescript"
                showLineNumbers={true}
                theme={dracula}
                codeBlock={true}
              />
            </div>
            <div>
              <p className="mt-[20px] text-[20px]">Controller</p>
              <p className="mt-[20px]">This is the controller class</p>
              <CopyBlock
                text={`// Import the MemoryCache class from the specified file
                  import { MemoryCache } from './MemoryCache'; // Adjust the path as needed

                  // Define a generic Controller class that works with any type T
                  export class Controller<T> {
                      private apiUrl: string;
                      private cache: MemoryCache<T[]>;
                      private debounceDuration: number;
                      private minQueryLength: number;
                      private lastQuery: string;
                      private numberOfResults: number;
                      private debouncedFetch: (query: string, limit?: number) => Promise<T[]>;

                      constructor(
                          apiUrl: string,
                          cache: MemoryCache<T[]>,
                          debounceDuration: number = 300,
                          minQueryLength: number = 3,
                          numberOfResults: number = 10,
                          apiTimeoutDruration: number = 5000,
                      ) {
                          this.apiUrl = apiUrl;
                          this.cache = cache;
                          this.debounceDuration = debounceDuration;
                          this.minQueryLength = minQueryLength;
                          this.lastQuery = '';
                          this.numberOfResults = numberOfResults;
                          this.debouncedFetch = this.debounce(this.fetchResults.bind(this), debounceDuration);
                      }

                      private debounce(fn: (query: string, limit?: number) => Promise<T[]>, delay: number) {
                          let timeout: NodeJS.Timeout | undefined;
                          return (query: string, limit: number = 10): Promise<T[]> => {
                              return new Promise((resolve) => {
                                  if (timeout) {
                                      clearTimeout(timeout);
                                  }
                                  timeout = setTimeout(() => {
                                      fn(query, limit).then(resolve);
                                  }, delay);
                              });
                          };
                      }

                      private async fetchResults(query: string, limit: number = 10): Promise<T[]> {
                          if (query.length < this.minQueryLength) {
                              return [];
                          }

                          // Check cache first
                          const cachedResults = this.cache.get(query);
                          if (cachedResults) {
                              return cachedResults;
                          }

                          // Fetch from server
                          try {
                              const results: T[] = await response.json();

                              // Store results in cache
                              this.cache.set(query, results);

                              console.log("Fetched results:", results);

                              return results;
                          } catch (error) {
                              console.error("Error fetching results:", error);
                              return [];
                          }
                      }

                      public handleInputChange(query: string, updateResultsUI: (results: T[]) => void): void {
                          this.lastQuery = query; // Update the last query
                          this.debouncedFetch(query, this.numberOfResults).then(results => {
                              if (query === this.lastQuery) { // Ensure the results are for the latest query
                                  updateResultsUI(results); // Update the UI with the results
                              }
                          }).catch(error => {
                              console.error("Error in debouncedFetch:", error);
                          });
                      }
                  }
                  `}
                language="typescript"
                showLineNumbers={true}
                theme={dracula}
                codeBlock={true}
              />
            </div>
            <div>
              <CodeComponent
                header={"Input Field"}
                description={
                  "This React component handles the user input and passes the input to the controller."
                }
                text={`
                import React from "react";
                  // Define the types for the props
                  interface ResultsUIProps<T> {
                    results: any;
                    handleSelection: (result: T) => void;
                  }

                  // Constrain T to be renderable by React (ReactNode)
                  export default function ResultsUI<T extends React.ReactNode>({
                    results,
                    handleSelection
                  }: ResultsUIProps<T>): JSX.Element {
                    return (
                      <div>
                        <ul>
                          {results?.results?.map((result: any, index: React.Key | null | undefined) => (
                            <li
                              key={index}
                              onClick={() => handleSelection(result)}
                              style={{ cursor: "pointer" }}
                            >
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                `}
              />
            </div>
            <div>
              <CodeComponent
                header={"Results UI Component"}
                description={
                  "This component receives results from the controller and renders them. It also notifies the controller of user selections."
                }
                text={`
    import React from "react";

    // Define the types for the props
    interface ResultsUIProps<T> {
      results: any;
      handleSelection: (result: T) => void;
    }

    // Constrain T to be renderable by React (ReactNode)
    export default function ResultsUI<T extends React.ReactNode>({
      results,
      handleSelection
    }: ResultsUIProps<T>): JSX.Element {
      return (
        <div>
          <ul>
            {results?.results?.map((result: any, index: React.Key | null | undefined) => (
              <li
                key={index}
                onClick={() => handleSelection(result)}
                style={{ cursor: "pointer" }}
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      );
    }
                `}
              />
            </div>
            <div>
              <CodeComponent
                header={"Results UI Component"}
                description={
                  "This component receives results from the controller and renders them. It also notifies the controller of user selections."
                }
                text={`
    import React from "react";

    // Define the types for the props
    interface ResultsUIProps<T> {
      results: any;
      handleSelection: (result: T) => void;
    }

    // Constrain T to be renderable by React (ReactNode)
    export default function ResultsUI<T extends React.ReactNode>({
      results,
      handleSelection
    }: ResultsUIProps<T>): JSX.Element {
      return (
        <div>
          <ul>
            {results?.results?.map((result: any, index: React.Key | null | undefined) => (
              <li
                key={index}
                onClick={() => handleSelection(result)}
                style={{ cursor: "pointer" }}
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      );
    }
                `}
              />
            </div>
            <div>
              <CodeComponent
                header={"Auto Complete Component"}
                description={
                  "This is the main component that brings together the InputField, ResultsUI, Cache, and Controller."
                }
                text={`
   "use client";
import { useState } from "react";
import { MemoryCache } from "@/services/MemoryCache";
import { Controller } from "@/services/Controller";
import InputField from "@/components/InputField";
import ResultsUI from "@/components/ResultsUI";

type ResultType = string[];

interface AutoCompleteProps {
  numberOfResults?: number; // number of the results to show
  apiUrl: string; // API URL to fetch results from
  debounceDuration?: number; // debounce duration in milliseconds
  minQueryLength?: number; // minimum query length to trigger API call
  apiTimeoutDuration?: number; // API timeout duration in milliseconds
  cacheDuration?: number; // cache duration in milliseconds
}

export default function AutoComplete({
  apiUrl,
  debounceDuration,
  minQueryLength,
  apiTimeoutDuration,
  cacheDuration,
  numberOfResults
}: AutoCompleteProps) {
  const [results, setResults] = useState<ResultType[]>([]);
  const cache = new MemoryCache<ResultType[]>(cacheDuration);
  // Initialize the controller with the API URL and cache
  const controller = new Controller<ResultType>(
    apiUrl,
    cache,
    debounceDuration,
    minQueryLength,
    numberOfResults,
    apiTimeoutDuration
  );

  const updateResultsUI = (results: ResultType[]) => {
    setResults(results);
  };

  const handleSelection = (selectedResult: ResultType) => {
    setResults([selectedResult]);
    console.log("User selected:", selectedResult);
    // Handle further actions on selection
  };

  return (
    <div>
      <InputField controller={controller} updateResultsUI={updateResultsUI} />
      <ResultsUI results={results} handleSelection={handleSelection} />
    </div>
  );
}
                `}
              />
            </div>
          </div>
        </div>

        <div
          className="footer flex mt-[120px] flex-row
         max-w-max m-auto gap-[10px] sm:gap-[60px] pointer"
        >
          {footerLink?.map((item) => (
            <Link href={item?.link} target={item?.link}>
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
