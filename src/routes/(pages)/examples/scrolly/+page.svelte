<script>
    import BasicPage from "../../BasicPage.svelte";

	/* By Connor Rothschild https://twitter.com/CL_Rothschild
	Scrollytelling component from Russell Goldenberg https://twitter.com/codenberg/status/1432774653139984387 */

  import Scrolly from "$lib/utils/Scrolly.svelte";
  import Scatterplot from "./Scatterplot.svelte";

  let value;
  const steps = [
		"<p>This is a dynamic, responsive scatterplot that uses Russell Goldenberg's <a href='	https://twitter.com/codenberg/status/1432774653139984387' target='_blank'><code>Scrolly</code></a> to update its points' values on scroll.</p>",
        "<p>The scatterplot uses tweened values to automatically update your points with smooth transitions. It also binds to the width of the container <code>div</code>, so its responsive by default.</p>",
        "<p>Try resizing me to see the 'side-by-side' version, compared to the 'text-on-top' version that appears on small screens.</p><p>Want it to always appear 'text-on-top'? Just comment out the media query at the bottom of our styles (as in, leave the styles but comment out the surrounding <code>media</code> query).</p>",
        "<p>Adding more steps is easy.</p>",
  ];
</script>

<BasicPage>
    <span slot="title">Scolly</span>
    <span slot="content">
        <section>
            <div class='hero'>
                <h1>
                    A Svelte Visualization Scrollytelling Starter Kit
                </h1>
                <h2>
                    By <a href='https://twitter.com/CL_Rothschild' target="_blank">Connor</a>
                </h2>
            </div>
          <div class="section-container">
            <div class="steps-container">
              <Scrolly bind:value>
                {#each steps as text, i}
                  <div class="step" class:active={value === i}>
                    <div class="step-content">{@html text}</div>
                  </div>
                {/each}
                <div class="spacer" />
              </Scrolly>
            </div>
            <div class="sticky">
              <Scatterplot step={value} />
            </div>
          </div>
            <div class='hero'>
                <h1>
                    Thanks!
                </h1>
                <h2>
                    <a href='https://twitter.com/CL_Rothschild' target="_blank">Questions and Tips</a>
                </h2>
            </div>
        </section>

    </span>
</BasicPage>


<style>
	:global(body) {
		overflow-x: hidden;
	}

	.hero {
		height: 60vh;
		display: flex;
		place-items: center;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	.hero h2 {
		margin-top: 0;
		font-weight: 200;
	}

  .spacer {
    height: 40vh;
  }

  .sticky {
    position: sticky;
    top: 10%;
	flex: 1 1 60%;
    width: 60%;
  }

  .section-container {
    margin-top: 1em;
    text-align: center;
    transition: background 100ms;
    display: flex;
  }

  .step {
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    font-size: 1rem;
    background: whitesmoke;
    color: #ccc;
    border-radius: 5px;
    padding: .5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    text-align: left;
		width: 75%;
		margin: auto;
		max-width: 500px;
  }

	.step.active .step-content {
		background: white;
		color: black;
	}

  .steps-container,
  .sticky {
    height: 100%;
  }

  .steps-container {
    flex: 1 1 40%;
    z-index: 10;
  }

/* Comment out the following line to always make it 'text-on-top' */
  @media screen and (max-width: 768px) {
    .section-container {
      flex-direction: column-reverse;
    }
    .sticky {
      width: 95%;
			margin: auto;
    }
  }
</style>